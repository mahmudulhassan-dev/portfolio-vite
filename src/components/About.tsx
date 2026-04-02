"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, Code, Database, Rocket, Globe } from "lucide-react";
import { SectionHeader } from "./ui/motion";

export default function About() {
  const stats = [
    { icon: Globe, label: "Business-First Approach" },
    { icon: Brain, label: "AI Automation Specialist" },
    { icon: Code, label: "Full-Stack Engineering" },
    { icon: Database, label: "CMS & Custom Solutions" },
    { icon: Rocket, label: "DevOps & Deployment" },
    { icon: Globe, label: "Remote Worldwide" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="Who I Am"
          title="About Me"
          subtitle="A business-minded technologist who turns complex problems into elegant, scalable solutions."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-purple/20 blur-3xl -z-10" />
            <div className="glass-card rounded-3xl p-8 text-center interactive-card">
              <div className="relative z-10">
                {/* Avatar */}
                <div className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan via-blue to-purple p-1 glow-sm overflow-hidden">
                  <div className="w-full h-full rounded-[0.9rem] overflow-hidden">
                    <img 
                      src="/mahmudul.jpg" 
                      alt="Mahmudul Hassan - AI Automation Architect & Lead Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1">Mahmudul Hassan</h3>
                <p className="text-cyan text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  AI Automation Architect & Lead Developer
                </p>

                <div className="space-y-4 text-left">
                  {stats.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 text-text-3 text-sm">
                      <s.icon className="w-4 h-4 text-cyan" />
                      {s.label}
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/5">
                  <a
                    href="#contact"
                    className="group text-sm font-bold flex items-center justify-center gap-2 text-text hover:text-cyan transition-colors"
                  >
                    Let&apos;s work together
                    <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 text-text-2 text-lg leading-relaxed">
              <p>
                I&apos;m not just a developer — I&apos;m a{" "}
                <strong className="text-text">systems architect</strong> who bridges the gap between technology and business growth. I combine{" "}
                <strong className="text-cyan">high-level AI automation</strong> with{" "}
                <strong className="text-text">enterprise-grade full-stack engineering</strong> to create digital ecosystems that{" "}
                <em className="text-cyan not-italic">automate workflows and drive results.</em>
              </p>
              <p>
                My approach is unique: I think like a <strong className="text-text">product builder</strong>, not just a coder. Every line of code I write, every automation I design, and every AI agent I create is engineered to drive measurable business outcomes — whether that&apos;s reducing manual work by 80%, capturing more leads, or building a platform that serves thousands of users.
              </p>
              <p>
                From <strong className="text-text">AI-powered workflow automation</strong> and <strong className="text-text">custom CMS implementations</strong> to <strong className="text-text">SaaS product development</strong> — I deliver premium, production-ready solutions that make a real impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "AI Automation",
                "Workflow Optimization",
                "LLM Engineering",
                "Product Strategy",
                "Clean Architecture",
                "SaaS Ecosystems",
                "Next.js Expert",
                "Supabase",
                "DevOps",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-surface-2 border border-border text-[10px] font-bold text-text-3 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const ArrowIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
