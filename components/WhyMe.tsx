
import React from 'react';

const WhyMe: React.FC = () => {
  const reasons = [
    "Deep understanding of local markets",
    "Practical, results-driven SEO strategies",
    "Custom AI tools built for real needs",
    "Simple, secure, and scalable solutions",
    "Experience in physical & practical training",
    "Focus on long-term growth, not shortcuts"
  ];

  return (
    <section className="py-32 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.3em] mb-6">Value Proposition</h2>
            <h3 className="text-5xl font-black mb-12 tracking-tighter leading-tight">Why Choose My<br />Strategic Approach?</h3>
            <div className="grid grid-cols-1 gap-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green group-hover:text-brand-dark transition-all duration-300">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-brand-gray p-10 rounded-3xl border border-white/10 relative z-10">
              <h4 className="text-2xl font-black mb-10 uppercase tracking-tighter text-brand-green">Strategic Workflow</h4>
              <div className="space-y-10">
                {[
                  { step: "01", text: "Identify real local business bottlenecks" },
                  { step: "02", text: "Engineer focused digital growth engines" },
                  { step: "03", text: "Integrate AI to automate repetitive tasks" },
                  { step: "04", text: "Scale with secure, future-proof systems" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <span className="text-brand-green font-black text-xl italic opacity-50">{item.step}</span>
                    <p className="text-lg font-bold text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-green/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
