"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, MessageSquare, Database, Sparkles, Zap, Bot, Share2 } from "lucide-react";
import { SectionHeader } from "./ui/motion";

const areas = [
  {
    icon: Brain,
    title: "Agent Architecture",
    desc: "Designing autonomous multi-agent systems that can research, plan, and execute complex business tasks.",
    color: "cyan",
  },
  {
    icon: MessageSquare,
    title: "NLP & Chatbots",
    desc: "Building context-aware, high-conversion conversational AI for customer support and lead qualification.",
    color: "blue",
  },
  {
    icon: Bot,
    title: "Prompt Engineering",
    desc: "Advanced prompt optimization for various LLMs (OpenAI, Anthropic) to ensure high-quality, structured output.",
    color: "purple",
  },
  {
    icon: Database,
    title: "Memory & Vector DB",
    desc: "Implementing RAG architectures and vector databases for high-context, knowledge-based AI systems.",
    color: "green",
  },
];

export default function AiExpertise() {
  return (
    <section id="ai-expertise" className="py-24 relative overflow-hidden bg-bg">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-5 sm:px-8">
        <SectionHeader
          badge="Specialization"
          title="AI Engineering"
          subtitle="I blend advanced machine learning models with production-grade engineering to build practical AI value."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 group interactive-card transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-${a.color}/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <a.icon className={`w-7 h-7 text-${a.color}`} />
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-text transition-colors">
                {a.title}
              </h3>
              <p className="text-sm text-text-3 leading-relaxed mb-6">
                {a.desc}
              </p>

              <div className="flex gap-2">
                 <div className={`w-1 h-1 rounded-full bg-${a.color}/50`} />
                 <div className={`w-3 h-1 rounded-full bg-${a.color}/30`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <div className="flex -space-x-4">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="w-10 h-10 rounded-full border-2 border-bg bg-surface-2 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-cyan">A{i}</span>
               </div>
             ))}
             <div className="w-10 h-10 rounded-full border-2 border-bg bg-cyan flex items-center justify-center text-bg font-bold text-xs ring-4 ring-cyan/10">
                +20
             </div>
          </div>
          <p className="text-sm text-text-4">
             <strong className="text-text">20+ AI agents</strong> successfully deployed in production environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
