
import React from 'react';

const Services: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Local SEO Growth",
      icon: "fa-map-location-dot",
      items: ["Google Business Profile", "Location-based SEO Pages", "Off-Page SEO & Link Building", "On-page & Technical SEO", "Lead Generation Systems"],
      badge: null,
      action: null
    },
    {
      title: "Rank & Rent SEO",
      icon: "fa-building-columns",
      items: ["Niche Viability Research", "Conversion-Focused Site Build", "Google SERPs & Map Pack Rank", "Pay Per Call Lead Delivery", "100% Asset Ownership"],
      badge: "Lead Gen",
      action: { label: "Explore Rank & Rent", target: "rank-and-rent" }
    },
    {
      title: "AI-Powered Tools",
      icon: "fa-robot",
      items: ["Educational AI Systems", "SEO Automation Utilities", "Geo Data Extraction", "Custom Operational Dashboards"],
      badge: null,
      action: null
    },
    {
      title: "Training & Mentorship",
      icon: "fa-graduation-cap",
      items: ["Local Market Demand Analysis", "Problem-Solving Skills", "Tool-Building Mindset", "Practical Earning Pathways"],
      badge: null,
      action: null
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.3em] mb-4">Expertise</h2>
            <h3 className="text-3xl font-black text-brand-dark tracking-tighter">Professional Services</h3>
          </div>
          <div className="h-px bg-gray-200 flex-1 mx-8 hidden md:block"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Scroll To Explore</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute top-0 left-0 w-full h-full bg-brand-dark rounded-3xl translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10"></div>
              <div className="p-8 sm:p-9 rounded-3xl bg-white border-2 border-brand-dark h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 bg-brand-green text-brand-dark rounded-2xl flex items-center justify-center shadow-lg">
                      <i className={`fas ${service.icon} text-xl`}></i>
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 bg-brand-dark text-brand-green text-[10px] font-black uppercase tracking-wider rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-brand-dark mb-6 uppercase tracking-tight">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-gray-600 font-medium text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {service.action ? (
                  <button
                    onClick={() => scrollTo(service.action.target)}
                    className="w-full mt-4 py-2.5 px-4 bg-brand-dark text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-brand-green hover:text-brand-dark transition-colors flex items-center justify-center gap-2"
                  >
                    {service.action.label}
                    <i className="fas fa-arrow-down text-[10px]"></i>
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
