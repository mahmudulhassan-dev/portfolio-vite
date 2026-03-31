import { Reveal, SectionHeader } from "@/components/ui/motion";
import {
  Bot,
  Brain,
  Code2,
  Package,
  Database,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation Systems",
    desc: "Build intelligent automation workflows that replace manual processes — from lead capture and CRM updates to content generation and customer communication. Save 80%+ of operational time.",
    tags: ["Workflow Automation", "Lead Generation", "CRM Integration", "API Automation"],
    color: "from-cyan to-blue",
    iconColor: "text-cyan",
  },
  {
    icon: Brain,
    title: "AI Agent & Prompt Engineering",
    desc: "Design custom AI agents with precision-crafted prompt systems. Your AI assistant will qualify leads, answer questions, recommend services, and close deals — all on autopilot.",
    tags: ["Custom AI Agents", "Prompt Systems", "Chat Assistants", "Sales Automation"],
    color: "from-purple to-pink",
    iconColor: "text-purple",
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    desc: "High-performance websites and web applications built with Next.js, React, and TypeScript. From business sites and landing pages to complex SaaS dashboards — all custom, no templates.",
    tags: ["Next.js / React", "TypeScript", "Landing Pages", "SaaS Dashboards"],
    color: "from-blue to-cyan",
    iconColor: "text-blue",
  },
  {
    icon: Package,
    title: "CMS Solutions",
    desc: "Expert implementation of WordPress (headless & custom), Webflow, Shopify, Strapi, Sanity, and Contentful. I know when to use a CMS and when to build custom — optimizing cost and control.",
    tags: ["WordPress", "Webflow", "Shopify", "Headless CMS"],
    color: "from-orange to-amber",
    iconColor: "text-orange",
  },
  {
    icon: Database,
    title: "Backend & Database",
    desc: "Robust backend architecture with Supabase, PostgreSQL, Node.js, and REST APIs. Authentication, realtime features, database design, and API-first development for scalable systems.",
    tags: ["Supabase", "Node.js", "PostgreSQL", "API Development"],
    color: "from-green to-cyan",
    iconColor: "text-green",
  },
  {
    icon: Rocket,
    title: "DevOps & Deployment",
    desc: "Production-grade deployment with CI/CD pipelines, Docker, Vercel, and cloud hosting. Zero-downtime deployments, environment management, and infrastructure that scales.",
    tags: ["CI/CD", "Docker", "Vercel", "Cloud Hosting"],
    color: "from-cyan to-purple",
    iconColor: "text-indigo",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-cyan bottom-0 left-[-200px]" />
      <div className="blob w-[350px] h-[350px] bg-blue top-1/3 right-[-150px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionHeader
          badge="What I Do"
          title="My"
          highlight="Services"
          subtitle="End-to-end solutions — from AI automation and custom development to CMS platforms and DevOps. Every service is designed to deliver measurable business results."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="glass-card rounded-3xl p-7 h-full group interactive-card gradient-border">
                  <div className="relative z-10">
                    {/* Accent line */}
                    <div
                      className={`h-1 w-12 rounded-full bg-gradient-to-r ${s.color} mb-6 group-hover:w-20 transition-all duration-500`}
                    />

                    {/* Icon */}
                    <div className={`${s.iconColor} mb-4`}>
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan transition-colors duration-300">
                      {s.title}
                    </h3>

                    <p className="text-sm text-text-2 leading-relaxed mb-5">
                      {s.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-surface-2 text-text-3 border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
