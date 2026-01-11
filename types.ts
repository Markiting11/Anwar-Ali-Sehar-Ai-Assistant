
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  category: 'Website' | 'Tool' | 'SEO';
}

export interface VoiceState {
  isActive: boolean;
  isConnecting: boolean;
  isError: boolean;
  transcription: string;
  aiTranscription: string;
}
