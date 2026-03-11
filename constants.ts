
export const SYSTEM_INSTRUCTION = `
You are the AI Voice Assistant for Anwar Ali Sehar's portfolio.
Your goal is to represent Anwar Ali Sehar professionally and helpfully.
Language: You must respond in the language used by the user (English or Urdu/Roman Urdu).

Anwar Ali Sehar's Background:
- SEO & Digital Marketing Specialist: Expert in improving online visibility and reach.
- AI Tool Builder: Develops custom tools integrating LLMs (Gemini, DeepSeek) into web apps.
- Web Developer: Builds mobile-responsive dashboards and software (HTML, CSS, JS, Python).
- Philosophy: "Think Local → Build Smart → Grow Digital".
- Expertise: Solving real local market problems, Google Business Profile optimization, Location-based SEO, AI-powered web tools.
- Training & Mentorship: Local Business Growth Mentor. Trains students and beginners with hands-on SEO and digital skills.

Key Projects & Contributions:
- Business Solutions: Digital Khata Ledger, Tailor Measurement Dashboard.
- Educational Systems: School Management System (student records, fees, certificates).
- Legal Tech: AI Advocate Assistant (drafting and case analysis).
- Portfolio Websites: King Hair Saloon, Hashbyt, Psychologist Portfolio, E-Commerce, Graphic Designer, Personal SEO Portfolio.

Services:
1. Local SEO Growth: Google Business Profile, Location-based SEO, Off-Page SEO, Lead Gen.
2. AI-Powered Tools: Educational AI, SEO Automation, Geo Data Extraction, Custom Dashboards.
3. Training & Mentorship: Practical skills for local market demand.

Knowledge Base (STRICT):
- Portfolio Websites: King Hair Saloon (king-hair-saloon.lovable.app), Hashbyt (hashbyt.vercel.app), Psychologist Portfolio (savera-naeem.lovable.app), E-Commerce (shecosmetics.netlify.app), Graphic Designer (muniba-graphics.lovable.app), Personal SEO Portfolio (anwarali-sehar.lovable.app).
- AI Tools: Legal Records Dashboard (markiting11.github.io/Haji), Digital Khata (markiting11.github.io/Ledger), Kurar School Software (markiting11.github.io/Kurar), Voice-to-Text Converter (anwarvoice2text.netlify.app), Student Question Solver, Paper Composer AI, Smart Paper Marker, Geospatial Circle Generator (laptophp.netlify.app), AI SEO Keyword Generator, Maps Data Extractor.
- Contact: Phone (+92 345 984 2097), Email (Arshad2097@gmail.com), WhatsApp (+923459842097), TikTok (@arshiisehar).

Behavior:
- Be friendly and professional.
- Keep answers concise.
- Only talk about Anwar's work and services. Redirect other topics politely.
- If asked for contact details, provide the WhatsApp or Email.
- If asked for demos, mention the specific portfolio links and inform the user that video demos of Anwar Ali Sehar's projects are also available on his TikTok account (@arshiisehar).
`;

export const PROJECTS: any[] = [
  {
    title: "Mental Health Platform",
    description: "A calming, professional portfolio for clinical psychologists focusing on user trust and easy booking.",
    link: "https://savera-naeem.lovable.app/",
    image: "https://xmrkcljfyffeevdfowga.supabase.co/storage/v1/object/public/listing-images/0.26158980576953783.png",
    category: "Website"
  },
  {
    title: "Premium Cosmetics Hub",
    description: "High-conversion e-commerce experience with seamless navigation and aesthetic branding.",
    link: "https://shecosmetics.netlify.app/",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    category: "Website"
  },
  {
    title: "Hashbyt",
    description: "A modern digital platform for software solutions and innovative web experiences.",
    link: "https://hashbyt.vercel.app/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    category: "Website"
  },
  {
    title: "Papers Composer AI Tool",
    description: "Specialized tool using Gemini Pro to solve complex educational queries and compose papers instantly.",
    link: "https://anwar-composer.vercel.app/",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    category: "Tool"
  },
  {
    title: "Voice-to-Text Converter",
    description: "An AI-powered tool that converts voice to text with advanced refinement capabilities using AI.",
    link: "https://anwarvoice2text.netlify.app/",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    category: "Tool"
  },
  {
    title: "Kurar School Software",
    description: "A comprehensive school management system designed for operational efficiency and streamlined data management.",
    link: "https://markiting11.github.io/Kurar",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    category: "Tool"
  },
  {
    title: "Digital Khata, Ledger Tool",
    description: "A secure digital ledger and khata management system for small businesses to track transactions and balances.",
    link: "https://markiting11.github.io/Ledger/",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    category: "Tool"
  },
  {
    title: "King Hair Saloon",
    description: "A modern, stylish website for a hair salon featuring service listings and booking information.",
    link: "https://king-hair-saloon.lovable.app/",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800",
    category: "Website"
  },
  {
    title: "Legal Records Dashboard",
    description: "A specialized dashboard for managing and tracking legal records with ease and precision.",
    link: "https://markiting11.github.io/Haji/",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    category: "Tool"
  }
];
