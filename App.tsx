
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import RankAndRent from './components/RankAndRent';
import ProfessionalJourney from './components/ProfessionalJourney';
import WhyMe from './components/WhyMe';
import Portfolio from './components/Portfolio';
import SEOContent from './components/SEOContent';
import Contact from './components/Contact';
import VoiceAssistant from './components/VoiceAssistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Rank & Rent', id: 'rank-and-rent' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'rank-and-rent', 'portfolio', 'contact'];
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

  const openAssistant = () => {
    const btn = document.querySelector('[class*="bottom-6"] button');
    if (btn instanceof HTMLElement) btn.click();
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-brand-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Brand Logo & Name */}
            <div
              className="flex items-center gap-2.5 cursor-pointer select-none"
              onClick={() => {
                scrollTo('hero');
                setMobileMenuOpen(false);
              }}
            >
              <div className="w-8 h-8 bg-brand-dark rounded-lg flex items-center justify-center text-brand-green font-black shadow-sm">
                A
              </div>
              <span className="text-sm sm:text-base md:text-xl font-black text-brand-dark tracking-tight">
                ANWAR ALI SEHAR
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors pb-1 ${
                    activeSection === item.id
                      ? 'text-brand-dark border-b-2 border-brand-green'
                      : 'text-gray-400 hover:text-brand-dark'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 text-brand-dark flex items-center justify-center hover:bg-brand-green hover:border-brand-dark transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-base`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1.5 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollTo(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-xs font-black uppercase tracking-wider transition-all ${
                  activeSection === item.id
                    ? 'bg-brand-dark text-brand-green'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-brand-dark'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      activeSection === item.id ? 'bg-brand-green' : 'bg-transparent'
                    }`}
                  ></span>
                  {item.label}
                </span>
                {item.id === 'rank-and-rent' && (
                  <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase bg-brand-green text-brand-dark">
                    Lead Gen
                  </span>
                )}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-gray-100 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  openAssistant();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 bg-brand-green text-brand-dark border-2 border-brand-dark rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-brand-dark hover:text-white transition-colors"
              >
                <i className="fas fa-microphone"></i> AI Agent
              </button>
              <button
                onClick={() => {
                  scrollTo('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 bg-brand-dark text-white rounded-xl text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-brand-green hover:text-brand-dark transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-12">
        <Hero onCtaClick={() => scrollTo('contact')} onToolsClick={() => scrollTo('portfolio')} />
        <About />
        <Services />
        <RankAndRent onCtaClick={() => scrollTo('contact')} onAssistantClick={openAssistant} />
        <ProfessionalJourney />
        <WhyMe />
        <Portfolio />
        <SEOContent />
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
            <a href="https://www.tiktok.com/@arshiisehar" target="_blank" className="text-gray-400 hover:text-brand-green transition-colors"><i className="fab fa-tiktok text-xl"></i></a>
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
