"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Terminal, Blocks, Cpu, BarChart3, ArrowRight } from "lucide-react";
import { SectionHeader } from "./ui/motion";

const services = [
  {
    icon: Zap,
    title: "AI Automation Systems",
    desc: "Build intelligent workflows that automate repetitive business tasks, data entry, and lead generation using LLMs and modern automation platforms.",
    tag: "Efficiency",
  },
  {
    icon: Layout,
    title: "Full-Stack Development",
    desc: "High-performance web applications built with React 19, Next.js, and TypeScript. Focus on speed, scalability, and pixel-perfect design.",
    tag: "Scalability",
  },
  {
    icon: Terminal,
    title: "AI Agent Engineering",
    desc: "Develop custom autonomous agents that can research, interact with customers, and solve complex problems without human intervention.",
    tag: "Innovation",
  },
  {
    icon: Blocks,
    title: "Headless CMS & E-commerce",
    desc: "Streamlined content management and shopping experiences using Shopify, WordPress, and custom headless architectures for total control.",
    tag: "Management",
  },
  {
    icon: Cpu,
    title: "API-First Architecture",
    desc: "Robust backend systems and third-party integrations (Stripe, HubSpot, etc.) ensuring all your digital tools speak the same language.",
    tag: "Connectivity",
  },
  {
    icon: BarChart3,
    title: "SaaS Product Design",
    desc: "Transform ideas into functional software-as-a-service products with intuitive UX and a foundation built for rapid growth.",
    tag: "Growth",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="Expertise"
          title="Premium Services"
          subtitle="Enterprise-grade digital solutions designed for high-performance businesses."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 group interactive-card hover:border-cyan/30 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-cyan/5 flex items-center justify-center mb-10 group-hover:bg-cyan/10 transition-colors">
                  <s.icon className="w-8 h-8 text-cyan shadow-sm" />
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold text-text-4 uppercase tracking-[0.2em]">
                    {s.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-text group-hover:text-cyan transition-colors mt-1">
                    {s.title}
                  </h3>
                </div>

                <p className="text-text-3 text-base leading-relaxed mb-10">
                  {s.desc}
                </p>

                <div className="mt-auto pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan group-hover:gap-4 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
