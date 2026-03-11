
import React from 'react';

const ProfessionalJourney: React.FC = () => {
  const roles = [
    {
      title: "SEO & Digital Marketing Specialist",
      description: "Expert in search engine optimization and digital marketing, helping businesses improve their online visibility and reach through data-driven strategies."
    },
    {
      title: "AI Tool Builder",
      description: "Developing custom tools by integrating Large Language Models (like Gemini and DeepSeek) into web applications to automate complex tasks and enhance productivity."
    },
    {
      title: "Web Developer",
      description: "Building functional, mobile-responsive dashboards and software solutions using HTML, CSS, JavaScript, and Python with a focus on user experience."
    }
  ];

  const contributions = [
    {
      category: "Business Solutions",
      details: "Developed practical applications like a Digital Khata Ledger for shopkeepers and a Tailor Measurement Dashboard to help local businesses digitize their records."
    },
    {
      category: "Educational Systems",
      details: "Built a comprehensive School Management System to handle student records, fees, and automated certificate generation for streamlined operations."
    },
    {
      category: "Legal Tech",
      details: "Currently developing an AI Advocate Assistant to help legal professionals with drafting, case analysis, and legal research automation."
    }
  ];

  return (
    <section id="journey" className="py-20 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.4em] mb-6">Professional Journey</h2>
          <h3 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none uppercase">
            Core Roles & <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #BAFF02' }}>Strategic Contributions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {roles.map((role, idx) => (
            <div key={idx} className="p-10 border-2 border-brand-green/30 rounded-3xl hover:border-brand-green transition-colors duration-500 group">
              <div className="text-brand-green text-4xl font-black mb-6 opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
              <h4 className="text-2xl font-black mb-6 uppercase tracking-tight leading-tight">{role.title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed group-hover:text-gray-200 transition-colors">{role.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h4 className="text-3xl font-black uppercase tracking-tighter border-b-4 border-brand-green pb-4 inline-block">Key Contributions</h4>
            <div className="space-y-8">
              {contributions.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green text-brand-dark rounded-full flex items-center justify-center font-black">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <p className="text-xl font-black uppercase tracking-tight mb-2">{item.category}</p>
                    <p className="text-gray-400 font-medium leading-relaxed">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-brand-green text-brand-dark p-12 rounded-[3rem] relative z-10">
              <h4 className="text-3xl font-black uppercase tracking-tighter mb-6">Mentorship & Community</h4>
              <p className="text-lg font-bold leading-relaxed mb-8">
                Beyond technical work, Anwar serves as a <span className="bg-brand-dark text-white px-2">Local Business Growth Mentor</span>. He actively trains students and beginners, providing practical, hands-on experience in SEO and digital skills.
              </p>
              <div className="h-px bg-brand-dark/20 w-full mb-8"></div>
              <p className="font-bold uppercase tracking-widest text-sm">
                Dedicated to making advanced technology accessible and useful for both local and international clients.
              </p>
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-brand-green rounded-[3rem] -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
