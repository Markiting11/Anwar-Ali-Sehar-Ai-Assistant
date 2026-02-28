
import React from 'react';

const SEOContent: React.FC = () => {
  return (
    <section id="seo-content" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-8">
            <h2 className="text-xs font-black text-brand-green uppercase tracking-[0.3em] mb-4">SEO & Digital Growth</h2>
            <h3 className="text-4xl font-black text-brand-dark mb-8 tracking-tighter uppercase leading-none">
              Strategic Local SEO & <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #000' }}>AI Tool Development</span>
            </h3>
            
            <div className="prose prose-lg max-w-none text-gray-600 font-medium space-y-6">
              <p>
                In today's competitive digital landscape, having a website is not enough. To truly dominate your local market, you need a multi-faceted approach that combines <strong>Local SEO</strong>, <strong>Off-Page SEO</strong>, and <strong>AI-driven automation</strong>. Anwar Ali Sehar specializes in bridging the gap between traditional marketing and modern technology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-gray-50 border-l-4 border-brand-green rounded-r-2xl">
                  <h4 className="text-xl font-black text-brand-dark mb-4 uppercase tracking-tight">Local SEO Domination</h4>
                  <p className="text-sm leading-relaxed">
                    We optimize your <strong>Google Business Profile (GBP)</strong> and create location-specific landing pages that rank. By focusing on "near me" searches and local intent, we ensure your business is the first choice for local customers.
                  </p>
                </div>
                <div className="p-8 bg-gray-50 border-l-4 border-brand-dark rounded-r-2xl">
                  <h4 className="text-xl font-black text-brand-dark mb-4 uppercase tracking-tight">Off-Page SEO & Authority</h4>
                  <p className="text-sm leading-relaxed">
                    Building authority through high-quality <strong>backlinks</strong> and digital PR. Our off-page strategies focus on relevance and trust, helping your site climb the SERPs and stay there.
                  </p>
                </div>
              </div>

              <p className="mt-8">
                Our portfolio includes diverse projects like the <strong>King Hair Saloon</strong> website, <strong>Hashbyt</strong> digital platform, and specialized tools such as the <strong>Legal Records Dashboard</strong> and <strong>Digital Khata</strong>. Each project is built with a "Think Local, Build Smart" philosophy.
              </p>

              <div className="bg-brand-dark text-white p-10 rounded-3xl mt-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter text-brand-green">Why AI Tools for SEO?</h4>
                <p className="text-gray-300 mb-6">
                  Standard SEO tools often miss the nuances of local markets. That's why we build custom AI utilities like <strong>Geo Data Extractors</strong> and <strong>SEO Automation Tools</strong>. These tools provide the data-driven clarity needed to outpace competitors who rely on guesswork.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">Data Extraction</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">AI Automation</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">Local Lead Gen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats/Quick Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="border-4 border-brand-dark p-8 rounded-3xl bg-brand-green shadow-[12px_12px_0px_0px_#000]">
                <h4 className="text-4xl font-black text-brand-dark mb-2">99%</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/60 mb-6">Local Visibility Increase</p>
                <div className="h-2 bg-brand-dark/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-dark w-[99%]"></div>
                </div>
              </div>

              <div className="border-4 border-brand-dark p-8 rounded-3xl bg-white">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Core Focus Areas</h4>
                <ul className="space-y-4">
                  {[
                    "Google Maps Optimization",
                    "High-Authority Link Building",
                    "Custom AI Dashboard Design",
                    "Location-Based Lead Funnels",
                    "Technical SEO Audits"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-dark font-bold text-sm uppercase tracking-tight">
                      <i className="fas fa-check text-brand-green bg-brand-dark p-1 rounded-md text-[10px]"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <p className="text-sm text-gray-500 italic font-medium">
                  "I don't just build websites; I build digital assets that solve real-world problems for local business owners."
                </p>
                <p className="text-xs font-black mt-4 uppercase tracking-widest text-brand-dark">— Anwar Ali Sehar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
