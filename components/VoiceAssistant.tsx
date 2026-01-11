
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { SYSTEM_INSTRUCTION } from '../constants';

const VoiceAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [history, setHistory] = useState<{ type: 'user' | 'ai', text: string }[]>([]);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const outAudioContextRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const toggleAssistant = () => setIsOpen(!isOpen);

  // Audio helpers
  const encode = (bytes: Uint8Array) => {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  };

  const startSession = async () => {
    if (isActive || isConnecting) return;
    setIsConnecting(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: SYSTEM_INSTRUCTION,
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
          },
          inputAudioTranscription: {},
          outputAudioTranscription: {}
        },
        callbacks: {
          onopen: () => {
            setIsConnecting(false);
            setIsActive(true);
            const source = audioContextRef.current!.createMediaStreamSource(stream);
            const scriptProcessor = audioContextRef.current!.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBlob = {
                data: encode(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000'
              };
              sessionPromise.then(s => {
                if (s && typeof s.sendRealtimeInput === 'function') {
                  s.sendRealtimeInput({ media: pcmBlob });
                }
              }).catch(() => {});
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(audioContextRef.current!.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.serverContent?.inputTranscription) {
               setHistory(prev => {
                 const last = prev[prev.length - 1];
                 if (last?.type === 'user') {
                    const updated = [...prev];
                    updated[updated.length - 1] = { ...last, text: last.text + message.serverContent!.inputTranscription!.text };
                    return updated;
                 }
                 return [...prev, { type: 'user', text: message.serverContent!.inputTranscription!.text }];
               });
            }
            if (message.serverContent?.outputTranscription) {
               setHistory(prev => {
                 const last = prev[prev.length - 1];
                 if (last?.type === 'ai') {
                    const updated = [...prev];
                    updated[updated.length - 1] = { ...last, text: last.text + message.serverContent!.outputTranscription!.text };
                    return updated;
                 }
                 return [...prev, { type: 'ai', text: message.serverContent!.outputTranscription!.text }];
               });
            }

            const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData && outAudioContextRef.current && outAudioContextRef.current.state !== 'closed') {
              const audioBuffer = await decodeAudioData(decode(audioData), outAudioContextRef.current, 24000, 1);
              const source = outAudioContextRef.current.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outAudioContextRef.current.destination);
              
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outAudioContextRef.current.currentTime);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
              source.onended = () => sourcesRef.current.delete(source);
            }

            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => {
                try { s.stop(); } catch {}
              });
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onclose: () => stopSession(),
          onerror: (e) => {
            console.error('Session error:', e);
            stopSession();
          }
        }
      });
      
      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error('Failed to start session:', err);
      setIsConnecting(false);
      setIsActive(false);
    }
  };

  const stopSession = () => {
    if (sessionRef.current) {
       try { sessionRef.current.close(); } catch {}
       sessionRef.current = null;
    }
    
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(console.error);
    }
    audioContextRef.current = null;

    if (outAudioContextRef.current && outAudioContextRef.current.state !== 'closed') {
      outAudioContextRef.current.close().catch(console.error);
    }
    outAudioContextRef.current = null;
    
    setIsActive(false);
    setIsConnecting(false);
    sourcesRef.current.forEach(s => {
      try { s.stop(); } catch {}
    });
    sourcesRef.current.clear();
    nextStartTimeRef.current = 0;
  };

  useEffect(() => {
    return () => stopSession();
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end font-sans">
      {/* Assistant Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] bg-brand-dark rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
          <div className="p-6 bg-brand-gray border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-brand-green animate-pulse' : 'bg-white/20'}`}></div>
              <span className="font-black text-xs uppercase tracking-widest text-white">AI Agent Live</span>
            </div>
            <button onClick={toggleAssistant} className="text-gray-500 hover:text-white transition-colors"><i className="fas fa-times"></i></button>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto bg-brand-dark flex flex-col gap-4">
            {history.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green">
                  <i className="fas fa-robot text-2xl"></i>
                </div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">Voice system active.</p>
                <p className="text-gray-500 text-sm mt-2">Ask me about SEO, AI tools, or contact Anwar.</p>
              </div>
            )}
            {history.map((msg, i) => (
              <div key={i} className={`max-w-[90%] p-4 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-brand-green text-brand-dark font-bold self-end rounded-tr-none shadow-lg' : 'bg-brand-gray text-white self-start rounded-tl-none border border-white/5'}`}>
                {msg.text}
              </div>
            ))}
            {isConnecting && (
              <div className="text-center text-brand-green/50 text-[10px] font-black uppercase tracking-widest animate-pulse">Establishing secure link...</div>
            )}
          </div>

          <div className="p-6 bg-brand-gray border-t border-white/5 flex flex-col gap-3">
            {isActive ? (
              <button 
                onClick={stopSession}
                className="w-full py-4 bg-white/5 text-white border border-white/10 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-brand-green hover:text-brand-dark hover:border-brand-green transition-all duration-300"
              >
                <i className="fas fa-square"></i> Disconnect
              </button>
            ) : (
              <button 
                onClick={startSession}
                disabled={isConnecting}
                className={`w-full py-4 ${isConnecting ? 'bg-gray-800 text-gray-600' : 'bg-brand-green text-brand-dark'} rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300`}
              >
                {isConnecting ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  <>
                    <i className="fas fa-microphone"></i> Start Voice Link
                  </>
                )}
              </button>
            )}
            <p className="text-[10px] text-gray-500 text-center font-bold uppercase tracking-tighter">English & Urdu Supported</p>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={toggleAssistant}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-brand-dark shadow-2xl transition-all transform hover:scale-110 active:scale-95 border-4 ${
          isActive ? 'bg-white border-brand-green' : 'bg-brand-green border-brand-dark'
        }`}
      >
        <i className={`fas ${isOpen ? 'fa-times' : (isActive ? 'fa-microphone-lines' : 'fa-headset')} text-2xl`}></i>
        {isActive && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-green"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default VoiceAssistant;
