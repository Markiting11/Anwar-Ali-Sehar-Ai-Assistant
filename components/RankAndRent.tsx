import React from 'react';

interface RankAndRentProps {
  onCtaClick: () => void;
  onAssistantClick?: () => void;
}

const RankAndRent: React.FC<RankAndRentProps> = ({ onCtaClick, onAssistantClick }) => {
  const steps = [
    {
      step: "01",
      icon: "fa-magnifying-glass-location",
      title: "Identify a High-Demand Local Niche",
      description: "Research local service industries with strong customer urgency, healthy ticket sizes, and viable competition (e.g., roofing, HVAC, plumbing, pest control, or specialized contractors)."
    },
    {
      step: "02",
      icon: "fa-laptop-code",
      title: "Build an SEO-Optimized Website",
      description: "Engineer a high-speed, mobile-first website designed for maximum call conversion. Implement clean architecture, location-specific service pages, and localized Schema markup."
    },
    {
      step: "03",
      icon: "fa-arrow-trend-up",
      title: "Rank on Google Search & Map Pack",
      description: "Deploy targeted on-page SEO, geo-relevant citations, technical optimization, and high-authority backlinks to secure top rankings for high-intent 'service + city' keywords."
    },
    {
      step: "04",
      icon: "fa-handshake",
      title: "Partner With a Vetted Local Company",
      description: "Connect with a reputable local service provider eager for new customers. Set up a transparent Pay Per Call or lead generation partnership tailored to their service capacity."
    },
    {
      step: "05",
      icon: "fa-phone-volume",
      title: "Route Qualified Calls & Generate Revenue",
      description: "Track and forward incoming customer inquiries directly to the partner's phone in real time. The business receives genuine sales opportunities, and you earn per qualified call."
    }
  ];

  const payPerCallBenefits = [
    {
      title: "Zero Waste for Businesses",
      icon: "fa-bullseye",
      desc: "Partners pay solely for verified, qualified inbound calls that meet minimum duration thresholds, eliminating the risk of wasted monthly marketing budgets."
    },
    {
      title: "100% Exclusive Inquiries",
      icon: "fa-lock",
      desc: "Unlike shared lead platforms where 4 to 6 competitors fight for the same inquiry, Rank & Rent leads are routed exclusively to one dedicated partner."
    },
    {
      title: "Transparent Call Analytics",
      icon: "fa-chart-pie",
      desc: "Every call is logged with caller ID, timestamp, duration, and optional recording, giving both parties complete clarity and trust on every billable lead."
    },
    {
      title: "High Buyer Intent",
      icon: "fa-user-check",
      desc: "Customers finding the site are actively searching Google with high purchase urgency, resulting in significantly higher closing rates for the service business."
    }
  ];

  const mentorshipPillars = [
    {
      title: "Niche & Profitability Analysis",
      text: "How to validate search volume, average customer value, and local competition before investing time and resources."
    },
    {
      title: "Conversion-Focused Site Building",
      text: "Crafting modern landing pages with strategic click-to-call triggers, fast load times, and frictionless user journeys."
    },
    {
      title: "Proven Local SEO Ranking Tactics",
      text: "Mastering on-page signals, citation building, Google Business Profile synergy, and natural authority building."
    },
    {
      title: "Business Outreach & Deal Structuring",
      text: "How to approach business owners professionally, establish call-tracking numbers, and negotiate win-win Pay Per Call agreements."
    }
  ];

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent("Hi Anwar, I would like to learn more about your Rank & Rent SEO service and mentorship.");
    window.open(`https://api.whatsapp.com/send/?phone=923459842097&text=${text}`, '_blank');
  };

  return (
    <section id="rank-and-rent" className="py-20 bg-gray-50 border-t border-b border-gray-200 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-brand-dark text-white rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            Specialized Business Model
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tighter uppercase leading-[1.05] mb-6">
            Rank & Rent SEO: <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #000' }}>
              Building Digital Real Estate
            </span>{" "}
            <span className="bg-brand-green text-brand-dark px-3 inline-block -rotate-1 transform mt-1">
              For Predictable Leads
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Rank & Rent is one of the most sustainable and high-leverage business models in local digital marketing. Instead of competing for low-margin client retainers, you build valuable digital assets that generate real inbound calls for local businesses.
          </p>
        </div>

        {/* 1. What Is Rank & Rent? Comparison Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-2 border-brand-dark shadow-[10px_10px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-green text-brand-dark rounded-2xl flex items-center justify-center font-black text-xl">
                  <i className="fas fa-building"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">The Concept</p>
                  <h3 className="text-2xl font-black text-brand-dark tracking-tight uppercase">What Is Rank & Rent?</h3>
                </div>
              </div>
              <p className="text-gray-700 font-medium leading-relaxed mb-6">
                <strong>Rank & Rent</strong> is a performance-based digital marketing model where an SEO specialist builds and ranks a website targeting a specific local service in a specific geographic area (e.g., emergency plumbing in a mid-sized city).
              </p>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Once the website ranks on Google's first page and local map packs, it naturally generates phone calls and quote requests from local homeowners and consumers. Rather than fulfilling the service yourself, you <strong>rent the site or route the qualified calls</strong> to a verified local business that has the capacity to take on new clients.
              </p>
              <div className="p-5 bg-brand-green/15 border-l-4 border-brand-green rounded-r-2xl">
                <p className="text-sm font-bold text-brand-dark leading-snug">
                  Key Distinction: You retain full ownership of the domain, design, rankings, and phone tracking system. You own the digital asset — the partner rents the stream of eager customers.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 bg-gray-100 rounded-full text-xs font-bold text-brand-dark">100% Asset Ownership</span>
              <span className="px-3.5 py-1.5 bg-gray-100 rounded-full text-xs font-bold text-brand-dark">Exclusive Inbound Calls</span>
              <span className="px-3.5 py-1.5 bg-gray-100 rounded-full text-xs font-bold text-brand-dark">Recurring Revenue Model</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-brand-dark text-white p-8 sm:p-10 rounded-3xl border-2 border-brand-dark relative overflow-hidden flex flex-col justify-between shadow-[10px_10px_0px_0px_#BAFF02]">
            <div className="relative z-10">
              <span className="text-xs font-black text-brand-green uppercase tracking-[0.25em] mb-4 block">Side-By-Side Comparison</span>
              <h4 className="text-2xl font-black mb-6 uppercase tracking-tight text-white">Client SEO vs. Rank & Rent</h4>

              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs font-black uppercase text-red-400 mb-1">Traditional Client SEO</p>
                  <p className="text-sm text-gray-300">You work on someone else's site. If a client cancels, months of hard work remain in their hands, and your monthly income disappears instantly.</p>
                </div>
                <div className="p-4 rounded-2xl bg-brand-green/10 border border-brand-green/40">
                  <p className="text-xs font-black uppercase text-brand-green mb-1">Rank & Rent Model</p>
                  <p className="text-sm text-gray-200">You control the asset. If a partner can no longer handle calls, you simply reroute the live phone stream to another contractor across town within minutes.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-400 italic">
              "Build once, rank strategically, and create long-term value rooted in real customer demand."
            </div>
          </div>
        </div>

        {/* 2. How It Works (Step-by-Step Blueprint) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xs font-black text-brand-green uppercase tracking-[0.3em] mb-3">Process</h3>
            <h4 className="text-3xl sm:text-4xl font-black text-brand-dark uppercase tracking-tight">How the Model Works</h4>
            <p className="text-gray-500 font-medium text-sm mt-2">A systematic 5-step framework from niche discovery to live revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-3xl border-2 border-brand-dark hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group shadow-[6px_6px_0px_0px_#000]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black text-brand-dark bg-brand-green px-2.5 py-1 rounded-md">
                      STEP {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-brand-green transition-colors">
                      <i className={`fas ${item.icon} text-base`}></i>
                    </div>
                  </div>
                  <h5 className="text-lg font-black text-brand-dark tracking-tight leading-snug mb-3 uppercase">
                    {item.title}
                  </h5>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The Pay Per Call Model */}
        <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-12 lg:p-16 border-4 border-brand-dark mb-20 relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 py-1 px-3 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-green mb-4 border border-white/10">
              <i className="fas fa-phone"></i> Inbound Lead Generation
            </div>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
              The Pay Per Call Advantage
            </h3>
            <p className="text-gray-300 font-medium text-base sm:text-lg leading-relaxed">
              Pay Per Call solves the biggest objection local businesses have with marketing agencies: uncertainty. Instead of paying hefty upfront retainer fees for speculative rankings, businesses pay solely for qualified inbound phone calls from prospective customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {payPerCallBenefits.map((benefit, i) => (
              <div key={i} className="bg-brand-gray p-6 rounded-2xl border border-white/10 hover:border-brand-green transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-green text-brand-dark flex items-center justify-center font-black mb-5">
                  <i className={`fas ${benefit.icon} text-lg`}></i>
                </div>
                <h4 className="text-lg font-black uppercase text-white mb-2 tracking-tight">{benefit.title}</h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Lead Smart Example Callout */}
          <div className="bg-brand-gray/90 border border-white/10 p-6 rounded-2xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 text-brand-green border border-brand-green/30 flex items-center justify-center font-bold text-base flex-shrink-0 mt-1 md:mt-0">
                <i className="fas fa-network-wired"></i>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">Monetization Platform Example</span>
                <h5 className="text-base font-bold text-white mb-1">Connecting With Platforms Like Lead Smart</h5>
                <p className="text-xs text-gray-300 leading-relaxed max-w-2xl">
                  Qualified calls can also be monetized through established Pay Per Call lead-generation platforms such as <a href="https://leadsmartinc.com" target="_blank" rel="noopener noreferrer" className="text-brand-green font-bold underline hover:text-white transition-colors">Lead Smart</a>, which connect high-intent inbound search calls directly with suitable local businesses (subject to platform approval and network requirements).
                </p>
              </div>
            </div>
            <a
              href="https://leadsmartinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 flex-shrink-0 transition-colors"
            >
              Visit Lead Smart <i className="fas fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-green text-brand-dark rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                <i className="fas fa-hand-holding-dollar"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Are You a Local Business Looking for Exclusive Qualified Calls?</p>
                <p className="text-xs text-gray-400">Let’s discuss your target city and service category to see if we can generate exclusive buyer inquiries for your team.</p>
              </div>
            </div>
            <button
              onClick={onCtaClick}
              className="px-6 py-3.5 bg-brand-green text-brand-dark font-black text-xs uppercase tracking-widest hover:bg-white transition-colors flex-shrink-0"
            >
              Partner on Pay Per Call
            </button>
          </div>
        </div>

        {/* Real-World Case Study / Live Project Spotlight */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 py-1 px-3 bg-brand-dark text-brand-green rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping"></span> Live Project Spotlight
            </div>
            <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tight">Active Rank & Rent Asset</h3>
            <p className="text-gray-500 font-medium text-xs sm:text-sm mt-1">Real-world implementation in the high-ticket residential roofing niche.</p>
          </div>

          <div className="bg-white rounded-3xl border-2 border-brand-dark p-6 sm:p-8 lg:p-10 shadow-[10px_10px_0px_0px_#000] max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-brand-dark border-2 border-brand-dark">
                <img 
                  src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800" 
                  alt="Cypress Roof Pros" 
                  className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-green text-brand-dark text-[10px] font-black uppercase px-3 py-1 rounded-md shadow-md">
                    Live Project
                  </span>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">Residential Roofing • Texas</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-[10px] font-bold text-brand-dark bg-brand-green/40 px-2 py-0.5 rounded">Partnered with Lead Smart</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-brand-dark uppercase tracking-tight mb-3">
                    Cypress Roof Pros
                  </h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6">
                    A dedicated Rank & Rent local lead-generation project engineered for residential roofing in Cypress, Texas. Built with localized schema, fast mobile load times, and conversion architecture to route qualified homeowner calls directly through <a href="https://leadsmartinc.com" target="_blank" rel="noopener noreferrer" className="text-brand-dark font-bold underline hover:text-brand-green transition-colors">Lead Smart</a> to licensed roofing contractors.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                  <a 
                    href="https://www.cypressroofpros.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-brand-dark text-white font-black text-xs uppercase tracking-wider hover:bg-brand-green hover:text-brand-dark transition-colors flex items-center gap-2"
                  >
                    Visit Cypress Roof Pros <i className="fas fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                  <span className="text-xs text-gray-400 font-medium italic">
                    cypressroofpros.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Learn Rank & Rent With Me (Mentorship / Entrepreneur Guidance) */}
        <div className="bg-white rounded-3xl border-2 border-brand-dark p-8 sm:p-12 shadow-[12px_12px_0px_0px_#000] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 py-1 px-3 bg-brand-green/20 text-brand-dark rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                <i className="fas fa-graduation-cap"></i> Mentorship & Skill Development
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight uppercase leading-tight mb-4">
                Learn Rank & Rent <br />
                <span className="text-brand-green bg-brand-dark px-2 inline-block">With Anwar Ali Sehar</span>
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Are you an aspiring digital marketer, freelancer, or entrepreneur looking to break away from low-paying client work and build sustainable digital assets?
              </p>
              <p className="text-gray-600 font-medium leading-relaxed mb-8">
                With 7+ years of hands-on experience in Local SEO, Google Business Profiles, citation architecture, and AI tool development, I guide you step-by-step through the real-world mechanics of the Rank & Rent business model — without unrealistic get-rich-quick claims.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {mentorshipPillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-200">
                    <p className="text-xs font-black text-brand-dark uppercase tracking-tight mb-1 flex items-center gap-2">
                      <i className="fas fa-check-circle text-brand-green bg-brand-dark rounded-full text-[10px]"></i>
                      {pillar.title}
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium leading-normal">{pillar.text}</p>
                  </div>
                ))}
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onCtaClick}
                  className="px-8 py-4 bg-brand-dark text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-brand-green hover:text-brand-dark transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                >
                  Let’s Build Your Lead Generation Business
                  <i className="fas fa-arrow-right"></i>
                </button>
                <button
                  onClick={handleOpenWhatsApp}
                  className="px-6 py-4 bg-white text-brand-dark border-2 border-brand-dark font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-brand-green transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp text-base"></i> Ask on WhatsApp
                </button>
              </div>
            </div>

            {/* Right side illustration / card */}
            <div className="lg:col-span-6">
              <div className="bg-brand-dark text-white p-8 sm:p-10 rounded-3xl border-4 border-brand-green relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-green">Strategic Blueprint</p>
                    <h4 className="text-xl font-black uppercase text-white">The Rank & Rent Growth Loop</h4>
                  </div>
                  <span className="text-xs font-black bg-brand-green text-brand-dark px-3 py-1 rounded-full uppercase">Practical</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-lg bg-brand-green text-brand-dark font-black flex items-center justify-center text-xs flex-shrink-0">A</div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase">Asset Creation, Not Hourly Work</p>
                      <p className="text-[11px] text-gray-400">Transform your SEO skills into equity you own rather than one-time client deliverables.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-lg bg-brand-green text-brand-dark font-black flex items-center justify-center text-xs flex-shrink-0">B</div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase">AI-Accelerated Workflows</p>
                      <p className="text-[11px] text-gray-400">Leverage custom AI tools for geo-data scraping, schema formatting, and local citation efficiency.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-lg bg-brand-green text-brand-dark font-black flex items-center justify-center text-xs flex-shrink-0">C</div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase">Sustainable Win-Win Economics</p>
                      <p className="text-[11px] text-gray-400">Local business owners get proven calls with zero risk, creating durable, long-term partnerships.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-brand-green text-brand-dark rounded-2xl font-bold text-xs text-center">
                  "No false promises. Just solid keyword research, technical SEO, and direct local business value."
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RankAndRent;
