import { Reveal, SectionHeader } from "@/components/ui/motion";
import {
  Zap,
  Target,
  Mail,
  Link2,
  FileText,
  BarChart3,
  ArrowRight,
  TrendingDown,
  RefreshCw,
  Rocket,
} from "lucide-react";

const automationAreas = [
  {
    icon: Zap,
    title: "Business Workflow Automation",
    desc: "Replace repetitive manual tasks with intelligent automated workflows. From data processing and document generation to multi-step approval systems.",
    outcome: "Save 80%+ operational time",
  },
  {
    icon: Target,
    title: "Lead Generation & Qualification",
    desc: "AI-powered systems that capture, score, and qualify leads automatically. Smart chatbots that ask the right questions and route hot leads to your team.",
    outcome: "3x more qualified leads",
  },
  {
    icon: Mail,
    title: "Communication Automation",
    desc: "Automated email sequences, customer follow-ups, onboarding flows, and feedback collection. Personalized at scale, triggered by user behavior.",
    outcome: "24/7 customer engagement",
  },
  {
    icon: Link2,
    title: "API & System Integration",
    desc: "Connect your tools into a unified system. CRM, payment gateways, email platforms, analytics — all talking to each other seamlessly through custom integrations.",
    outcome: "Zero manual data entry",
  },
  {
    icon: FileText,
    title: "Content Automation",
    desc: "AI-driven content creation workflows. Blog posts, social media, product descriptions, and marketing copy — generated, scheduled, and published automatically.",
    outcome: "10x content output",
  },
  {
    icon: BarChart3,
    title: "CRM-like AI Workflows",
    desc: "Custom CRM logic with AI intelligence. Automated contact management, deal tracking, task assignment, and smart notifications — without the bloat of enterprise CRM.",
    outcome: "Full pipeline visibility",
  },
];

const metrics = [
  { value: "80%", label: "Less Manual Work", icon: TrendingDown },
  { value: "24/7", label: "Always Running", icon: RefreshCw },
  { value: "10x", label: "Faster Execution", icon: Rocket },
];

export default function Automation() {
  return (
    <section id="automation" className="section-pad relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-purple top-1/4 right-[-200px]" />
      <div className="blob w-[300px] h-[300px] bg-cyan bottom-0 left-1/4" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionHeader
          badge="AI Automation"
          title="Automate Your"
          highlight="Business"
          subtitle="I build intelligent automation systems that eliminate manual work, capture more leads, and scale your operations — using AI, APIs, and smart workflows."
        />

        {/* Value proposition */}
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-10 mb-12 border-cyan/10 relative overflow-hidden interactive-card">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-purple/5 pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
              {metrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="group">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-cyan/60 group-hover:text-cyan transition-colors duration-300" />
                    <div className="text-3xl md:text-4xl font-black grad-text mb-1">
                      {m.value}
                    </div>
                    <div className="text-sm text-text-3 font-medium">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {automationAreas.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="glass-card rounded-3xl p-7 h-full group flex flex-col interactive-card gradient-border">
                  <div className="relative z-10 flex flex-col h-full">
                    <Icon
                      className="w-8 h-8 text-cyan mb-4"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan transition-colors duration-300">
                      {a.title}
                    </h3>
                    <p className="text-sm text-text-2 leading-relaxed mb-5 flex-1">
                      {a.desc}
                    </p>
                    <div className="flex items-center gap-2 pt-4 border-t border-border">
                      <span className="w-2 h-2 rounded-full bg-green" />
                      <span className="text-xs font-semibold text-green">
                        {a.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan to-blue text-bg font-bold text-sm hover:glow-md transition-all duration-500 hover:scale-105"
            >
              Automate Your Business
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
