
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.3em] mb-4">Connect</h2>
            <h3 className="text-5xl font-black text-brand-dark mb-10 tracking-tighter">Let's Talk Business</h3>
            <p className="text-lg text-gray-600 mb-12 font-medium leading-relaxed">
              Available for SEO audits, custom AI tool development, and long-term digital growth consulting. 
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-dark text-brand-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-brand-dark transition-colors">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Direct Line</p>
                  <a href="tel:+923459842097" className="text-xl font-black text-brand-dark">+92 345 984 2097</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-dark text-brand-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-brand-dark transition-colors">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Email Address</p>
                  <a href="mailto:Arshad2097@gmail.com" className="text-xl font-black text-brand-dark">Arshad2097@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-dark text-brand-green rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-brand-dark transition-colors">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Immediate Response</p>
                  <a href="https://api.whatsapp.com/send/?phone=923459842097" target="_blank" className="text-xl font-black text-brand-dark">Open WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-dark rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
            <div className="bg-white p-10 rounded-3xl border-2 border-brand-dark">
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Your Name</label>
                    <input type="text" className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-brand-green outline-none transition-colors text-brand-dark font-bold" placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-brand-green outline-none transition-colors text-brand-dark font-bold" placeholder="name@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Project Concept</label>
                  <input type="text" className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-brand-green outline-none transition-colors text-brand-dark font-bold" placeholder="e.g. Local SEO Growth" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Details</label>
                  <textarea rows={4} className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-brand-green outline-none transition-colors text-brand-dark font-bold" placeholder="Tell me about your business..."></textarea>
                </div>
                <button className="w-full py-5 bg-brand-dark text-white rounded-none font-black uppercase tracking-[0.2em] hover:bg-brand-green hover:text-brand-dark transition-all duration-300">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
