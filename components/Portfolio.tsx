
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Website', 'Tool', 'SEO'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.3em] mb-4">Case Studies</h2>
          <h3 className="text-5xl font-black text-brand-dark tracking-tighter mb-12">Latest Projects</h3>
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-none text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-brand-dark text-brand-green border-2 border-brand-dark' 
                  : 'bg-white text-gray-400 border-2 border-gray-100 hover:border-brand-dark hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden bg-brand-dark rounded-2xl mb-6">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute bottom-6 left-6 flex gap-2">
                   <span className="bg-brand-green text-brand-dark text-[10px] font-black uppercase px-3 py-1 rounded shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-black text-brand-dark mb-2 uppercase tracking-tighter">{project.title}</h3>
                  <p className="text-gray-500 font-medium mb-4">{project.description}</p>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-brand-dark flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all"
                >
                  <i className="fas fa-arrow-up-right-from-square text-sm"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-brand-green rounded-3xl text-brand-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-4xl font-black mb-6 tracking-tighter leading-tight uppercase">Unlock Your Digital Potential</h3>
            <p className="text-brand-dark/70 font-bold mb-10 text-lg">
              Let's build something efficient, secure, and profitable for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="https://api.whatsapp.com/send/?phone=923459842097" target="_blank" className="px-12 py-5 bg-brand-dark text-white rounded-none font-black uppercase tracking-widest hover:bg-brand-dark/90 transition-all shadow-xl">WhatsApp Me</a>
               <a href="mailto:Arshad2097@gmail.com" className="px-12 py-5 bg-white text-brand-dark rounded-none font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-xl">Send Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
