import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body as {
      messages: Array<{ role: "user" | "assistant" | "system"; content: string }>;
    };

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "messages array is required" }, { status: 400 });
    }

    const last = messages.filter((m) => m.role === "user").pop()?.content.toLowerCase() ?? "";
    const reply = generateReply(last);

    return Response.json({ reply });

    // ─── OpenAI Integration (uncomment when ready) ────────────
    //
    // import OpenAI from 'openai';
    // import { SYSTEM_PROMPT } from '@/lib/system-prompt';
    //
    // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    // const completion = await openai.chat.completions.create({
    //   model: 'gpt-4-turbo',
    //   messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
    //   temperature: 0.7,
    //   max_tokens: 500,
    // });
    // return Response.json({ reply: completion.choices[0]?.message?.content });
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

function generateReply(msg: string): string {
  if (/^(hi|hello|hey|assalamu|salaam|হ্যালো|হাই)/i.test(msg)) {
    return "Hello! 👋 Great to have you here. I'm Mahmudul's AI Assistant. I can help you learn about AI automation, web development, CMS platforms, and more. What are you looking to build?";
  }

  if (/automat|workflow|অটোমেশন/i.test(msg)) {
    return "**AI Automation** is one of Mahmudul's core specialties! Here's what he builds:\n\n⚡ **Business Workflow Automation** — Replace manual tasks, save 80%+ time\n🎯 **Lead Generation Systems** — AI-powered capture, scoring & qualification\n📧 **Communication Automation** — Email sequences, follow-ups, onboarding\n🔗 **API & System Integration** — Connect CRM, payments, analytics seamlessly\n📝 **Content Automation** — AI-driven content creation & publishing\n📊 **CRM-like AI Workflows** — Smart deal tracking & task routing\n\nWant to automate something specific in your business?";
  }

  if (/service|offer|কী করেন|সার্ভিস|what do you do/i.test(msg)) {
    return "Mahmudul offers **end-to-end digital solutions**:\n\n🤖 **AI Automation Systems** — Workflow, lead gen, CRM automation\n🧠 **AI Agents & Prompt Engineering** — Custom chatbots, sales bots\n💻 **Custom Web Development** — Next.js, React, TypeScript apps\n📦 **CMS Solutions** — WordPress, Webflow, Shopify, headless CMS\n🗄️ **Backend & Database** — Supabase, Node.js, PostgreSQL\n🚀 **DevOps & Deployment** — CI/CD, Docker, cloud hosting\n\nWhich area interests you most?";
  }

  if (/cms|wordpress|webflow|shopify|strapi|sanity|contentful/i.test(msg)) {
    return "Mahmudul is a **world-class CMS expert** working with:\n\n📝 **WordPress** — Headless API, custom themes, WooCommerce\n🎨 **Webflow** — Visual builder, marketing sites, rapid launch\n🛍️ **Shopify** — Custom storefronts, Liquid, headless integration\n📦 **Strapi** — Open-source headless CMS, self-hosted\n✍️ **Sanity** — Structured content, real-time collaboration\n🏢 **Contentful** — Enterprise-grade, multi-language\n\n**Key insight:** Knowing *when* to use CMS vs custom build is what matters most. Want help choosing the right approach?";
  }

  if (/ai agent|chatbot|assistant|prompt|চ্যাটবট|এআই/i.test(msg)) {
    return "Mahmudul designs **intelligent AI systems** including:\n\n🤖 Custom AI agents with multi-turn conversation\n🧠 Precision prompt engineering (role-based, chain-of-thought)\n💬 Website chat assistants like this one\n🎯 Lead qualification bots\n📞 Customer support automation (70%+ auto-resolution)\n📋 Sales qualification systems\n\nEach agent is engineered with business logic, safety guardrails, and measurable outcomes. Want an AI agent for your business?";
  }

  if (/website|web dev|next\.?js|react|ওয়েবসাইট/i.test(msg)) {
    return "Mahmudul builds **premium custom web solutions**:\n\n⚡ **Next.js** — SEO-optimized, blazing fast, scalable\n⚛️ **React** — Interactive, component-based interfaces\n📘 **TypeScript** — Type-safe, maintainable codebases\n🎨 **Tailwind CSS** — Beautiful, responsive designs\n\n**Why custom over templates?** Full control over performance, SEO, scalability, and unique business logic. No platform limitations.\n\nReady to discuss your web project?";
  }

  if (/supabase|backend|database|node/i.test(msg)) {
    return "For backend architecture, Mahmudul works with:\n\n🗄️ **Supabase** — Auth, database, realtime, storage in one platform\n🐘 **PostgreSQL** — Robust relational database\n📡 **Node.js** — Server-side APIs and workflows\n🔐 **Authentication** — Secure user management\n\nSupabase is the go-to for modern full-stack development — fast, scalable, and developer-friendly. Need a backend solution?";
  }

  if (/price|cost|budget|quote|কত|বাজেট/i.test(msg)) {
    return "Pricing depends on project scope:\n\n• **AI Automation Systems** — $$-$$$\n• **Custom Web Apps** — $$-$$$$\n• **CMS Implementations** — $-$$\n• **AI Agent/Chatbot** — $$-$$$\n\nFor an accurate quote, share your project details through the contact form — Mahmudul responds within 12 hours! 📩";
  }

  if (/hire|project|work together|কাজ|প্রজেক্ট/i.test(msg)) {
    return "Excited you're interested! 🎯 Let me help qualify your project:\n\n1️⃣ **What** do you want to build? (automation, website, AI agent, CMS, etc.)\n2️⃣ **Goal** — What business problem are you solving?\n3️⃣ **Timeline** — When do you need it?\n4️⃣ **Budget** — Any range in mind?\n\nShare these details here or use the contact form below!";
  }

  if (/contact|reach|email|যোগাযোগ/i.test(msg)) {
    return "Reach Mahmudul through:\n\n📧 **Email:** hello@mahmudulhassan.dev\n📝 **Contact Form:** Scroll down on this page\n⚡ **Response Time:** Usually within 12 hours\n💼 **Availability:** Freelance & Contract, Remote Worldwide\n\nReady to start a conversation?";
  }

  if (/thank|thanks|ধন্যবাদ/i.test(msg)) {
    return "You're welcome! 😊 Feel free to ask anything else about AI automation, web development, or CMS solutions. Have a great day! 🚀";
  }

  if (/custom vs|template vs|cms vs custom/i.test(msg)) {
    return "Great question! Here's how to decide:\n\n**🔧 Go Custom when:**\n• Complex business logic & unique workflows\n• Full performance & architecture control\n• SaaS products, dashboards, web apps\n• Long-term scalability needed\n\n**📦 Use CMS when:**\n• Content-heavy sites with frequent updates\n• Non-technical teams managing content\n• Standard e-commerce catalogs\n• Faster launch with lower initial cost\n\nMahmudul helps you make the right choice for your specific situation. Want to discuss your project?";
  }

  return "Thanks for your message! I can help you with:\n\n🤖 AI Automation & Workflow Systems\n🧠 AI Agents & Prompt Engineering\n💻 Custom Web Development (Next.js, React)\n📦 CMS Platforms (WordPress, Webflow, Shopify)\n🗄️ Backend & Database (Supabase, Node.js)\n🚀 DevOps & Cloud Deployment\n\nWhat would you like to explore? You can also use the contact form to reach Mahmudul directly.";
}
