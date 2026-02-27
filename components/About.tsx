
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-brand-dark rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-brand-dark">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" alt="Anwar Ali Sehar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-full h-full border-4 border-brand-green rounded-2xl -z-0 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="absolute -top-8 -right-8 bg-brand-green p-8 rounded-2xl shadow-2xl z-20 border-4 border-brand-dark">
              <p className="text-5xl font-black text-brand-dark leading-none">5+</p>
              <p className="text-brand-dark text-xs font-black uppercase tracking-[0.2em] mt-2">Years of Mastery</p>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.4em] mb-6">The Architect</h2>
            <h3 className="text-5xl lg:text-6xl font-black text-brand-dark mb-10 tracking-tighter leading-[1.1]">SEO Expert & AI Strategy Lead</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I’m <span className="font-bold text-brand-dark">Anwar Ali Sehar</span>. I don't just "do" marketing—I engineer digital environments where businesses can't help but grow.
            </p>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Based in Pakistan, I work with global partners to implement <span className="underline decoration-brand-green decoration-8 underline-offset-8 font-black text-brand-dark">data-first Local SEO</span> and bespoke AI tools that eliminate manual grunt work.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-10 border-t-4 border-brand-dark">
              <div>
                <p className="text-2xl font-black text-brand-dark mb-2 uppercase tracking-tighter">No Fluff</p>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">Direct strategies focused strictly on ROI and conversion metrics.</p>
              </div>
              <div>
                <p className="text-2xl font-black text-brand-dark mb-2 uppercase tracking-tighter">AI Native</p>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">Leveraging cutting-edge models like Gemini Pro for your edge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
