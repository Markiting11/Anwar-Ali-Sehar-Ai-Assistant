
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Local SEO Growth",
      icon: "fa-map-location-dot",
      items: ["Google Business Profile", "Location-based SEO Pages", "On-page & Technical SEO", "Lead Generation Systems"]
    },
    {
      title: "AI-Powered Tools",
      icon: "fa-robot",
      items: ["Educational AI Systems", "SEO Automation Utilities", "Geo Data Extraction", "Custom Operational Dashboards"]
    },
    {
      title: "Training & Mentorship",
      icon: "fa-graduation-cap",
      items: ["Local Market Demand Analysis", "Problem-Solving Skills", "Tool-Building Mindset", "Practical Earning Pathways"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.3em] mb-4">Expertise</h2>
            <h3 className="text-5xl font-black text-brand-dark tracking-tighter">Professional Services</h3>
          </div>
          <div className="h-px bg-gray-200 flex-1 mx-8 hidden md:block"></div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Scroll To Explore</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute top-0 left-0 w-full h-full bg-brand-dark rounded-3xl translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10"></div>
              <div className="p-10 rounded-3xl bg-white border-2 border-brand-dark h-full">
                <div className="w-16 h-16 bg-brand-green text-brand-dark rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-8 uppercase tracking-tighter">{service.title}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-brand-green rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
