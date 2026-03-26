
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
              Anwar Ali Sehar is a <span className="font-bold text-brand-dark">Digital Marketing Specialist from Pakistan</span> known for his strong expertise in <span className="text-brand-green font-black">Local SEO and AI-powered web solutions</span>. With over <span className="font-bold text-brand-dark">7 years of experience</span>, he brings a practical, client-focused approach with real-world results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="space-y-4">
                <h4 className="text-brand-dark font-black uppercase tracking-widest text-xs flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-brand-green"></span> Core Expertise
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 font-medium">
                  <li className="flex items-start gap-2"><i className="fas fa-check text-brand-green mt-1"></i> Local SEO (GBP Optimization)</li>
                  <li className="flex items-start gap-2"><i className="fas fa-check text-brand-green mt-1"></i> Citation Building & Off-Page SEO</li>
                  <li className="flex items-start gap-2"><i className="fas fa-check text-brand-green mt-1"></i> AI-Powered Websites & Tools</li>
                  <li className="flex items-start gap-2"><i className="fas fa-check text-brand-green mt-1"></i> Web Apps & Dashboards</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-brand-dark font-black uppercase tracking-widest text-xs flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-brand-green"></span> Professional Highlights
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 font-medium">
                  <li className="flex items-start gap-2"><i className="fas fa-star text-brand-green mt-1"></i> Fiverr Level 2 Seller</li>
                  <li className="flex items-start gap-2"><i className="fas fa-globe text-brand-green mt-1"></i> International Client Base</li>
                  <li className="flex items-start gap-2"><i className="fas fa-graduation-cap text-brand-green mt-1"></i> Practical Skills Mentor</li>
                  <li className="flex items-start gap-2"><i className="fas fa-code text-brand-green mt-1"></i> Custom System Architect</li>
                </ul>
              </div>
            </div>

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
