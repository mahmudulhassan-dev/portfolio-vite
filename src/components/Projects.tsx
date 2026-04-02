"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles, Code2, Globe, Bot } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { SectionHeader } from "./ui/motion";

const projects = [
  {
    title: "AI Sales Automation Platform",
    desc: "An enterprise-level platform that automates lead research, qualifies prospects using GPT-4, and schedules meetings 24/7.",
    image: "https://images.unsplash.com/photo-1664575196412-ed801e83f427?auto=format&fit=crop&q=80&w=800",
    tags: ["n8n", "OpenAI", "Next.js", "TypeScript"],
    icon: Bot,
  },
  {
    title: "Headless Shopify Storefront",
    desc: "A custom high-performance e-commerce experience built with Next.js and Shopify Hydrogen, optimized for speed and conversion.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Shopify", "TailwindCSS", "Node.js"],
    icon: Globe,
  },
  {
    title: "Real-time SaaS Portfolio",
    desc: "A premium dashboard for tracking assets, revenue, and usage metrics across multiple SaaS products with real-time data streaming.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "Supabase", "Framer Motion", "Vercel"],
    icon: Code2,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-surface/30">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="Portfolio"
          title="Recent Work"
          subtitle="Explore some of my high-impact digital solutions and automation systems."
        />

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-[2.5rem] p-4 group interactive-card transition-all duration-700"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 mb-8">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button 
                    aria-label={`View live demo of ${p.title}`}
                    className="w-12 h-12 rounded-full bg-cyan text-bg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button 
                    aria-label={`View source code of ${p.title} on GitHub`}
                    className="w-12 h-12 rounded-full bg-surface-2 text-text flex items-center justify-center hover:scale-110 transition-transform border border-border"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="px-4 pb-6">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-bold text-cyan/70 uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-text group-hover:text-cyan transition-colors mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-text-3 leading-relaxed mb-8">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-surface-2 border border-border text-[9px] font-bold text-text-4 group-hover:text-text-3 transition-colors uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  aria-label={`View detailed case study for ${p.title}`}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-text hover:text-cyan transition-all group-hover:gap-4"
                >
                  Project Details
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 text-center"
        >
          <a
            href="https://github.com/mahmudulhassan-dev"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-surface-2 border border-border-2 text-text font-bold text-sm hover:glow-sm hover:border-cyan/30 transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            <GithubIcon className="w-5 h-5" />
            Explore GitHub Repositories
            <Sparkles className="w-4 h-4 text-cyan" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
