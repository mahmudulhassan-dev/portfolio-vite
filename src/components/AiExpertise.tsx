import { Reveal, SectionHeader } from "@/components/ui/motion";
import {
  Bot,
  Brain,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const areas = [
  {
    icon: Bot,
    title: "AI Agent Architecture",
    desc: "End-to-end AI agent design with multi-turn conversation flows, context memory, business logic integration, and personality calibration. Agents that truly understand your business.",
    points: [
      "Multi-turn context",
      "Business logic integration",
      "Personality design",
      "Safety guardrails",
    ],
  },
  {
    icon: Brain,
    title: "Prompt Engineering",
    desc: "Precision-crafted prompt systems using role-based architecture, chain-of-thought reasoning, structured output control, and reusable template libraries.",
    points: [
      "Chain-of-thought",
      "Role-based systems",
      "Output formatting",
      "Prompt libraries",
    ],
  },
  {
    icon: MessageSquare,
    title: "AI Chat Integration",
    desc: "Seamless embedding of AI assistants into websites, SaaS platforms, and business tools. Real-time streaming, modern UI, and custom behavior for every use case.",
    points: [
      "Website widgets",
      "Streaming responses",
      "API-first design",
      "Custom UI/UX",
    ],
  },
];

const process = [
  {
    n: "01",
    title: "Discovery & Strategy",
    desc: "Understand your business, goals, target users, and existing systems to design the perfect AI solution.",
  },
  {
    n: "02",
    title: "Architecture & Design",
    desc: "Design the agent's personality, knowledge base, conversation flows, decision trees, and safety boundaries.",
  },
  {
    n: "03",
    title: "Prompt Engineering",
    desc: "Craft precision prompts with role definitions, context injection, output formatting, and iterative optimization.",
  },
  {
    n: "04",
    title: "Build & Integrate",
    desc: "Implement the AI system, connect APIs, build the chat UI, and integrate with your existing tools and workflows.",
  },
  {
    n: "05",
    title: "Test & Deploy",
    desc: "Rigorous testing with edge cases, A/B testing response quality, and production deployment with monitoring.",
  },
];

export default function AiExpertise() {
  return (
    <section id="ai-expertise" className="section-pad relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-pink top-1/4 left-[-200px]" />
      <div className="blob w-[300px] h-[300px] bg-cyan bottom-1/4 right-[-100px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionHeader
          badge="AI Mastery"
          title="AI & Prompt"
          highlight="Expertise"
          subtitle="Building AI systems that understand context, follow business rules, and deliver real value — not just generic chatbot responses."
        />

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {areas.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.1}>
                <div className="glass-card rounded-3xl p-7 h-full group interactive-card gradient-border">
                  <div className="relative z-10">
                    <Icon
                      className="w-8 h-8 text-cyan mb-4"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan transition-colors duration-300">
                      {a.title}
                    </h3>
                    <p className="text-sm text-text-2 leading-relaxed mb-5">
                      {a.desc}
                    </p>
                    <div className="space-y-2.5">
                      {a.points.map((p) => (
                        <div
                          key={p}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
                          <span className="text-sm text-text-3">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Process Timeline */}
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-12 border-cyan/10 interactive-card">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-center mb-10">
                My AI Development{" "}
                <span className="grad-text">Process</span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {process.map((p, i) => (
                  <div key={p.n} className="relative group">
                    <div className="text-4xl font-black text-cyan/10 group-hover:text-cyan/25 transition-colors duration-300 mb-2 font-mono">
                      {p.n}
                    </div>
                    <h4 className="text-sm font-bold mb-2 group-hover:text-cyan transition-colors duration-300">
                      {p.title}
                    </h4>
                    <p className="text-xs text-text-4 leading-relaxed">
                      {p.desc}
                    </p>
                    {i < process.length - 1 && (
                      <div className="hidden lg:block absolute top-5 -right-3">
                        <ArrowRight className="w-4 h-4 text-cyan/20" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
