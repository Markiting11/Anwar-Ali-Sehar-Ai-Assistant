import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
  onToolsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onToolsClick }) => {
  return (
    <section id="hero" className="relative bg-white py-12 lg:py-16 overflow-hidden min-h-[60vh] flex items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 py-2 px-5 bg-brand-dark text-white rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-brand-green/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
              </span>
              Digital Strategy Architect
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter mb-6 leading-[1.1] lg:leading-[0.9] animate-in fade-in slide-in-from-left-8 duration-700 uppercase">
              Empowering <span className="lg:block"></span>
              <span className="text-transparent lg:block" style={{ WebkitTextStroke: '1.5px #000' }}>Local Businesses</span>
              <span className="bg-brand-green text-brand-dark px-3 sm:px-4 inline-block -rotate-1 transform mt-2 lg:mt-0">With Smart SEO & AI.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              The Work of <span className="text-brand-dark font-bold">Anwar Ali Sehar</span>. Local businesses don’t fail because they lack effort — they fail because they lack clarity, strategy, and the right tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center lg:justify-start">
              <button
                onClick={onCtaClick}
                className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-brand-dark text-white font-black text-lg sm:text-xl hover:bg-brand-green hover:text-brand-dark transition-all duration-500 uppercase tracking-tighter overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Your Growth
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
                </span>
              </button>
              
              <button
                onClick={() => {
                   const btn = document.querySelector('[class*="bottom-6"] button');
                   if (btn instanceof HTMLElement) btn.click();
                }}
                className="px-6 sm:px-10 py-4 sm:py-5 bg-brand-green text-brand-dark border-4 border-brand-dark font-black text-lg sm:text-xl hover:bg-brand-dark hover:text-white transition-all duration-300 uppercase tracking-tighter flex items-center justify-center gap-3"
              >
                <i className="fas fa-microphone"></i> Talk to AI Agent
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
             <div className="relative z-10 bg-white border-4 border-brand-dark p-2 shadow-[15px_15px_0px_0px_#BAFF02] lg:shadow-[20px_20px_0px_0px_#BAFF02] overflow-hidden rounded-2xl max-w-[300px] lg:max-w-none mx-auto">
                <img 
                  src="https://app.trickle.so/storage/public/images/usr_196e96caa8000001/a295c978-3017-4d2d-a66f-75aadc4fcab6.png" 
                  alt="Anwar Ali Sehar Strategy" 
                  className="w-full h-auto object-cover grayscale-0 hover:grayscale transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;