
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyMe from './components/WhyMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import VoiceAssistant from './components/VoiceAssistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-brand-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
              <div className="w-8 h-8 bg-brand-dark rounded flex items-center justify-center text-brand-green font-bold">A</div>
              <span className="text-xl font-bold text-brand-dark hidden sm:block tracking-tight">ANWAR ALI SEHAR</span>
            </div>
            <div className="flex space-x-4 md:space-x-8">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-brand-dark border-b-2 border-brand-green' : 'text-gray-400 hover:text-brand-dark'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-12">
        <Hero onCtaClick={() => scrollTo('contact')} onToolsClick={() => scrollTo('portfolio')} />
        <About />
        <Services />
        <WhyMe />
        <Portfolio />
        <Contact />
      </main>

      <footer className="bg-brand-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="w-12 h-12 bg-brand-green text-brand-dark rounded mx-auto flex items-center justify-center font-bold text-xl mb-6">A</div>
          <p className="text-2xl font-bold mb-4 tracking-tight">Anwar Ali Sehar</p>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Empowering Local Businesses with Smart SEO & AI Solutions.
          </p>
          <div className="flex justify-center space-x-8 mb-10">
            <a href="https://web.facebook.com/arshad.ali.7146557" target="_blank" className="text-gray-400 hover:text-brand-green transition-colors"><i className="fab fa-facebook-f text-xl"></i></a>
            <a href="https://www.linkedin.com/in/anwar-sehar" target="_blank" className="text-gray-400 hover:text-brand-green transition-colors"><i className="fab fa-linkedin-in text-xl"></i></a>
            <a href="https://github.com/Markiting11" target="_blank" className="text-gray-400 hover:text-brand-green transition-colors"><i className="fab fa-github text-xl"></i></a>
          </div>
          <div className="h-px bg-white/10 w-full mb-8"></div>
          <p className="text-xs text-gray-500 uppercase tracking-widest">© {new Date().getFullYear()} Anwar Ali Sehar. Built for the Future.</p>
        </div>
      </footer>

      {/* Persistent Voice Assistant */}
      <VoiceAssistant />
    </div>
  );
};

export default App;
