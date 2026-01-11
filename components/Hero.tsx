
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
  onToolsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onToolsClick }) => {
  return (
    <section id="hero" className="relative bg-white py-24 lg:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-24 translate-x-24 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 py-2 px-4 bg-brand-dark text-white rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
            Local Business Growth Specialist
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-brand-dark tracking-tighter mb-8 leading-[0.9]">
            SMART SEO.<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #000' }}>AI SOLUTIONS.</span><br />
            <span className="bg-brand-green px-2">LOCAL GROWTH.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
            I help local businesses dominate search results and automate growth using custom AI tools and practical SEO strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onCtaClick}
              className="px-10 py-5 bg-brand-dark text-white rounded-none font-black text-lg hover:bg-brand-green hover:text-brand-dark transition-all duration-300 uppercase tracking-tighter flex items-center justify-center gap-3 group"
            >
              Start Your Project
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button
              onClick={onToolsClick}
              className="px-10 py-5 bg-white text-brand-dark border-2 border-brand-dark rounded-none font-black text-lg hover:bg-gray-50 transition-all uppercase tracking-tighter"
            >
              View AI Tools
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
