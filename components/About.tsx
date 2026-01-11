
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-square bg-brand-dark rounded-2xl overflow-hidden shadow-2xl relative z-10">
               <img src="https://picsum.photos/seed/anwar/800/800" alt="Anwar Ali Sehar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-full h-full border-4 border-brand-green rounded-2xl -z-0 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="absolute -top-6 -right-6 bg-brand-green p-6 rounded-2xl shadow-xl z-20">
              <p className="text-4xl font-black text-brand-dark">5+</p>
              <p className="text-brand-dark/60 text-xs font-bold uppercase tracking-tighter">Years Exp.</p>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.3em] mb-4">Discovery</h2>
            <h3 className="text-4xl font-black text-brand-dark mb-8 tracking-tight">SEO Specialist & AI Innovator</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I’m <span className="font-bold text-brand-dark">Anwar Ali Sehar</span>. I bridge the gap between complex digital marketing and practical local business needs.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Based in Pakistan, I work globally to deliver <span className="underline decoration-brand-green decoration-4 underline-offset-4">Local SEO and vibe-coded AI tools</span>. My mission is to simplify technology for real growth.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-xl font-black text-brand-dark mb-1 uppercase tracking-tighter">Practical</p>
                <p className="text-sm text-gray-500">Real skills, real tools, real results.</p>
              </div>
              <div>
                <p className="text-xl font-black text-brand-dark mb-1 uppercase tracking-tighter">Secure</p>
                <p className="text-sm text-gray-500">Private & efficient AI implementations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
