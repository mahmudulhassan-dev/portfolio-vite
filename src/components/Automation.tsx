"use client";

import { motion } from "framer-motion";
import { Zap, Bot, Database, Workflow, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "./ui/motion";

const automationFeatures = [
  {
    icon: Bot,
    title: "AI Sales Agents",
    desc: "Autonomous agents that research leads, personalize outreach, and book meetings 24/7.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Connecting your stack (CRM, Email, ERP) with n8n and Make.com for seamless data flow.",
  },
  {
    icon: Database,
    title: "Data Syncing",
    desc: "Real-time synchronization across multiple platforms with intelligent error handling.",
  },
];

const benefits = [
  "Reduce manual work by up to 80%",
  "Zero human error in data entry",
  "Scalable operations without extra hiring",
  "24/7 availability for customer inquiries",
];

export default function Automation() {
  return (
    <section id="automation" className="py-24 relative overflow-hidden bg-bg/50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              align="left"
              badge="Efficiency"
              title="Autonomous Business Ecosystems"
              subtitle="Stop doing repetitive work. I build intelligent systems that work while you sleep."
            />

            <div className="space-y-6 mb-12">
              {automationFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 rounded-2xl bg-surface/40 hover:bg-surface-2/60 border border-border hover:border-cyan/30 transition-all duration-300 flex items-start gap-5 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text group-hover:text-cyan transition-colors mb-2">
                      {f.title}
                    </h4>
                    <p className="text-sm text-text-3 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-gradient-to-br from-cyan/10 to-blue/10 border border-cyan/20 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <h4 className="font-bold text-lg mb-2">Ready to automate?</h4>
                <p className="text-sm text-text-3">Get a custom automation roadmap for your business.</p>
              </div>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-cyan text-bg font-bold text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                Start AI Audit
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-cyan" />
                  </div>
                  <h3 className="text-2xl font-black italic tracking-tight grad-text uppercase">
                    Impact Analysis
                  </h3>
                </div>

                <div className="space-y-6 mb-12">
                  {benefits.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-xl group hover:border-cyan/20 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-5 h-5 text-green" />
                      </div>
                      <span className="font-bold text-text text-sm md:text-base">{b}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-cyan/5 border border-cyan/10 text-center">
                    <div className="text-3xl font-black text-cyan mb-1">80%</div>
                    <div className="text-[10px] font-bold text-text-4 uppercase tracking-widest leading-tight">Time Saved</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-cyan/5 border border-cyan/10 text-center">
                    <div className="text-3xl font-black text-cyan mb-1">0%</div>
                    <div className="text-[10px] font-bold text-text-4 uppercase tracking-widest leading-tight">Human Error</div>
                  </div>
                </div>
              </div>

              {/* Decorative particles for the card */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan/10 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
