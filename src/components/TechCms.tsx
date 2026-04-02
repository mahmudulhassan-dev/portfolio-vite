"use client";

import { motion } from "framer-motion";
import { Layers, Globe, Code2, Cpu, Database, LayoutTemplate, Briefcase, Zap } from "lucide-react";
import { SectionHeader } from "./ui/motion";

const groups = [
  {
    category: "Modern Stack",
    icon: Code2,
    techs: ["React 19", "Next.js", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
  },
  {
    category: "AI & Logic",
    icon: Cpu,
    techs: ["n8n", "Make.com", "OpenAI / LLMs", "Python", "LangChain"],
  },
  {
    category: "CMS & Platforms",
    icon: Database,
    techs: ["Shopify Headless", "WordPress", "Webflow", "Sanity", "Strapi"],
  },
];

export default function TechCms() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="Technology"
          title="Tech & CMS Ecosystem"
          subtitle="I use the most advanced tools to build high-performance, scalable systems."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {groups.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 group interactive-card hover:bg-surface-2/60 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <g.icon className="w-7 h-7 text-cyan" />
              </div>

              <h3 className="text-xl font-bold mb-6 group-hover:text-cyan transition-colors">
                {g.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {g.techs.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-xs font-medium text-text-3 group-hover:text-text-2 group-hover:border-cyan/20 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CMS Showcase / Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-surface-2/50 border border-border-2 p-10 md:p-16 text-center shadow-2xl"
        >
          {/* Subtle bg glow */}
          <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-br from-cyan/5 via-transparent to-blue/5 -z-10" />

          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black mb-6">
              Expert in <span className="grad-text">Custom CMS</span> & E-Commerce
            </h3>
            <p className="text-text-2 mb-10 text-lg leading-relaxed">
              I don&apos;t just use default templates. I build unique, high-performance content management systems and headless e-commerce platforms that give you total control and superior speed.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex flex-col items-center gap-2">
                <LayoutTemplate className="w-8 h-8 text-cyan" />
                <span className="text-[10px] font-bold tracking-widest uppercase">WordPress</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Briefcase className="w-8 h-8 text-cyan" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Shopify</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Layers className="w-8 h-8 text-cyan" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Webflow</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="w-8 h-8 text-cyan" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Sanity</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Globe className="w-8 h-8 text-cyan" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Wix</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative bg element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue/5 rounded-full blur-[150px] -z-10 opacity-60" />
    </section>
  );
}
