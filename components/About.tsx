
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-brand-dark rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-brand-dark">
               <img 
                 src="https://xmrkcljfyffeevdfowga.supabase.co/storage/v1/object/public/blog-images/s7zc8h0llq-1771747672251.png" 
                 alt="Anwar Ali Sehar - Practical Mindset" 
                 className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-8 -left-8 w-full h-full border-4 border-brand-green rounded-2xl -z-0 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="absolute -top-8 -right-8 bg-brand-green p-8 rounded-2xl shadow-2xl z-20 border-4 border-brand-dark">
              <p className="text-5xl font-black text-brand-dark leading-none">AI</p>
              <p className="text-brand-dark text-[10px] font-black uppercase tracking-[0.2em] mt-2">Driven Growth</p>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.4em] mb-6">A Practical Mindset</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-brand-dark mb-6 tracking-tighter leading-[1.1]">Not Just Services, Solutions.</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Anwar’s approach is rooted in <span className="font-bold text-brand-dark">ground reality</span>. Every strategy starts with one question: <span className="italic">“What problem is this local business actually facing?”</span>
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From visibility issues on Google Maps to lead conversion problems and repetitive manual tasks — solutions are designed to be <span className="underline decoration-brand-green decoration-8 underline-offset-8 font-black text-brand-dark">simple, secure, and scalable</span>.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-10 border-t-4 border-brand-dark">
              <div>
                <p className="text-2xl font-black text-brand-dark mb-2 uppercase tracking-tighter">Think Local</p>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">Identify real local business problems and build smart solutions.</p>
              </div>
              <div>
                <p className="text-2xl font-black text-brand-dark mb-2 uppercase tracking-tighter">Grow Digital</p>
                <p className="text-sm text-gray-500 font-bold leading-relaxed">Use SEO & AI to automate and scale for long-term growth.</p>
              </div>
            </div>
            <div className="mt-12 p-8 bg-brand-dark text-white rounded-2xl border border-white/10">
              <p className="text-lg italic font-medium text-gray-300">
                "The future of local business growth lies at the intersection of SEO, AI, and practicality. If you’re ready to grow smarter, automate better, and build digital assets that actually work — this is where the journey begins."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
