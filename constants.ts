
export const SYSTEM_INSTRUCTION = `
You are the AI Voice Assistant for Anwar Ali Sehar's portfolio.
Anwar Ali Sehar is a Local SEO Expert & Digital Marketing Specialist.
Your goal is to represent Anwar Ali Sehar professionally and helpfully.
Language: You must respond in the language used by the user (English or Urdu/Roman Urdu).

Anwar Ali Sehar's Background:
- Local SEO Expert & Digital Marketing Specialist: From Pakistan, known for strong expertise in Local SEO and AI-powered web solutions.
- Experience: Over 7 years in digital marketing with a practical, client-focused approach and real-world results.
- Core Expertise: Local SEO (Google Business Profile optimization), Citation building & off-page SEO, AI-powered websites and custom tools, Web apps and dashboards.
- Freelancing: Active on platforms like Fiverr (Level 2 Seller), working with international clients on SEO and automation projects.
- Training & Education: Helps students learn practical digital skills with a focus on earning through freelancing and local markets.
- Philosophy: "Think Local → Build Smart → Grow Digital".
- Strengths: Combines SEO + AI (a rare and valuable mix), builds custom systems instead of just using ready-made tools, strong understanding of local business ranking strategies.

Key Projects & Contributions:
- Business Solutions: Digital Khata Ledger, Tailor Measurement Dashboard.
- Educational Systems: School Management System (student records, fees, certificates), Pakistan School Board Age Verification System.
- Legal Tech: AI Advocate Assistant (drafting and case analysis).
- Portfolio Websites: King Hair Saloon, Hashbyt, Psychologist Portfolio, E-Commerce, Graphic Designer, Personal SEO Portfolio, DU Marketing Agency.

Services:
1. Local SEO Growth: Google Business Profile, Location-based SEO, Off-Page SEO, Lead Gen.
2. AI-Powered Tools: Educational AI, SEO Automation, Geo Data Extraction, Custom Dashboards.
3. Training & Mentorship: Practical skills for local market demand.

Knowledge Base (STRICT):
- Portfolio Websites: King Hair Saloon (king-hair-saloon.lovable.app), Hashbyt (hashbyt.vercel.app), Psychologist Portfolio (savera-naeem.lovable.app), E-Commerce (shecosmetics.netlify.app), Graphic Designer (muniba-graphics.lovable.app), Personal SEO Portfolio (anwarali-sehar.lovable.app), DU Marketing Agency (du-marketing.blog).
- AI Tools: Legal Records Dashboard (markiting11.github.io/Haji), Digital Khata (markiting11.github.io/Ledger), Kurar School Software (markiting11.github.io/Kurar), Voice-to-Text Converter (anwarvoice2text.netlify.app), Student Question Solver, Paper Composer AI, Smart Paper Marker, Geospatial Circle Generator (laptophp.netlify.app), AI SEO Keyword Generator, Maps Data Extractor, Pakistan School Board Age Verification System (admission-age-checker-2026.vercel.app).
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
    image: "https://scontent.fisb2-1.fna.fbcdn.net/v/t39.30808-6/577909097_1429396441889581_1607470844643324921_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeEs9OrdZ8m8lMccc0jGTyu3-O0iBUOJtPr47SIFQ4m0-lXXZmY9CnnJobjDdUtPZz37jhGB27JYyLxl46iigxoj&_nc_ohc=3COdOZ1kD_EQ7kNvwGymlPP&_nc_oc=AdnFvuv3gxi-JHhBrH90uszx6y-Sov_ZvidhlsSGiY92IRWH4QZJN8dvHXxcKcaxMzg&_nc_zt=23&_nc_ht=scontent.fisb2-1.fna&_nc_gid=US5kiH7P54RZWQfNn_TEkQ&_nc_ss=8&oh=00_AfxE5WFfjvJ3SUqZ11hHlRwDp2vmQXW_oA2EraDKXWpJMQ&oe=69B6E0C2",
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
  },
  {
    title: "DU Marketing Agency",
    description: "Comprehensive SEO optimization for a digital marketing agency, delivering significant growth in organic visibility and search rankings.",
    link: "https://du-marketing.blog",
    image: "https://du-marketing.blog/images/hero-image.png",
    category: "SEO"
  },
  {
    title: "Pakistan School Board Age Verification System",
    description: "A specialized tool for verifying student eligibility for school board admissions based on age requirements.",
    link: "https://admission-age-checker-2026.vercel.app/",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    category: "Tool"
  }
];
