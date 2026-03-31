import { Reveal, SectionHeader } from "@/components/ui/motion";
import { TrendingUp, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Sales Automation Platform",
    cat: "AI Automation",
    desc: "End-to-end sales automation system with AI lead scoring, automated follow-ups, chatbot qualification, and CRM integration. Reduced client's sales cycle by 40%.",
    tags: ["AI Agent", "Automation", "Next.js", "Supabase"],
    gradient: "from-cyan to-blue",
    metric: "40% faster sales cycle",
  },
  {
    title: "E-Commerce with Headless CMS",
    cat: "CMS + Custom",
    desc: "Headless WordPress + Next.js storefront with automated inventory management, SEO optimization, and custom checkout flow. 3s average page load.",
    tags: ["WordPress", "Next.js", "WooCommerce", "TypeScript"],
    gradient: "from-orange to-amber",
    metric: "300% traffic increase",
  },
  {
    title: "Business Process Automation Suite",
    cat: "AI Automation",
    desc: "Complete business automation: document processing, email workflows, task routing, and AI-powered reporting. Client saved 30+ hours/week.",
    tags: ["Workflow Automation", "Node.js", "API Integration", "AI"],
    gradient: "from-green to-cyan",
    metric: "30+ hours saved weekly",
  },
  {
    title: "SaaS Client Dashboard",
    cat: "Full-Stack",
    desc: "Real-time analytics dashboard with role-based access, billing integration, team management, and automated reporting. Serves 5000+ users.",
    tags: ["React", "Supabase", "TypeScript", "DevOps"],
    gradient: "from-purple to-pink",
    metric: "5000+ active users",
  },
  {
    title: "AI Customer Support System",
    cat: "AI Agent",
    desc: "Intelligent support chatbot that handles 70% of customer queries autonomously. Escalates complex issues to humans with full context.",
    tags: ["AI Agent", "Prompt Engineering", "Next.js", "OpenAI"],
    gradient: "from-cyan to-purple",
    metric: "70% auto-resolution rate",
  },
  {
    title: "Multi-CMS Marketing Site",
    cat: "CMS",
    desc: "Marketing website built with Webflow for rapid iteration, integrated with Sanity for blog content and Shopify for product pages. Multi-platform architecture.",
    tags: ["Webflow", "Sanity", "Shopify", "API Integration"],
    gradient: "from-pink to-purple",
    metric: "2x conversion rate",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="blob w-[450px] h-[450px] bg-cyan top-1/3 right-[-200px]" />
      <div className="blob w-[350px] h-[350px] bg-purple bottom-0 left-[-150px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionHeader
          badge="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="Real results from real projects. Each solution is engineered to deliver measurable business impact."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass-card rounded-3xl overflow-hidden h-full group flex flex-col interactive-card gradient-border">
                {/* Top gradient bar */}
                <div
                  className={`h-1 bg-gradient-to-r ${p.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 p-7 flex-1 flex flex-col">
                  {/* Category + Metric */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-cyan/10 text-cyan border border-cyan/10">
                      {p.cat}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-green">
                      <TrendingUp className="w-3 h-3" />
                      {p.metric}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-3 group-hover:text-cyan transition-colors duration-300">
                    {p.title}
                  </h3>

                  <p className="text-sm text-text-2 leading-relaxed mb-5 flex-1">
                    {p.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-surface-2 text-text-4"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-4 group-hover:text-cyan transition-colors flex-shrink-0 ml-2" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
