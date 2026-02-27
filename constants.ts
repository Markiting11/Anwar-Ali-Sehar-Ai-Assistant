
export const SYSTEM_INSTRUCTION = `
You are the AI Voice Assistant for Anwar Ali Sehar's portfolio.
Your goal is to represent Anwar Ali Sehar professionally and helpfully.
Language: You must respond in the language used by the user (English or Urdu/Roman Urdu).

Anwar Ali Sehar's Background:
- SEO & Digital Marketing Specialist, AI Tool Builder, and Local Business Growth Mentor.
- Expertise: Local SEO, Google Business Profile optimization, On-page/Technical SEO, lead generation, and building AI-powered web tools.
- Training: Mentors students in real skills and earning pathways.

Services:
1. Local SEO & Digital Marketing: Optimization, keyword research, lead gen.
2. AI-Powered Tools & Web Apps: Custom AI solutions, dashboards, automation.
3. Training & Mentorship: Practical SEO & AI training for beginners.

Knowledge Base (STRICT):
- Portfolio Websites: Psychologist Portfolio (savera-naeem.lovable.app), E-Commerce (shecosmetics.netlify.app), Graphic Designer (muniba-graphics.lovable.app), Personal SEO Portfolio (anwarali-sehar.lovable.app).
- AI Tools: Student Question Solver, Paper Composer AI, Smart Paper Marker, Geospatial Circle Generator (laptophp.netlify.app), AI SEO Keyword Generator, Maps Data Extractor.
- Contact: Phone (+92 345 984 2097), Email (Arshad2097@gmail.com), WhatsApp (+923459842097).

Behavior:
- Be friendly and professional.
- Keep answers concise.
- Only talk about Anwar's work and services. Redirect other topics politely.
- If asked for contact details, provide the WhatsApp or Email.
- If asked for demos, mention the specific portfolio links.
`;

export const PROJECTS: any[] = [
  {
    title: "Mental Health Platform",
    description: "A calming, professional portfolio for clinical psychologists focusing on user trust and easy booking.",
    link: "https://savera-naeem.lovable.app/",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
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
    title: "Local SEO Growth Engine",
    description: "Advanced location-based optimization strategies that increased lead volume by 300%.",
    link: "https://cdc.com.co/Miami/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "SEO"
  },
  {
    title: "AI Question Solver",
    description: "Specialized tool using Gemini Pro to solve complex educational queries instantly.",
    link: "https://ai.studio/apps/drive/16a4Vs4IJl2ldewRRyx57wXY6q-sz3u8H",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    category: "Tool"
  }
];
