import { Reveal, SectionHeader } from "@/components/ui/motion";
import {
  Wrench,
  Package,
  CheckCircle2,
} from "lucide-react";

const stackGroups = [
  {
    title: "Frontend",
    color: "text-cyan",
    barColor: "from-cyan to-blue",
    items: [
      { name: "Next.js", pct: 96 },
      { name: "React", pct: 95 },
      { name: "TypeScript", pct: 92 },
      { name: "Tailwind CSS", pct: 94 },
    ],
  },
  {
    title: "Backend & Database",
    color: "text-green",
    barColor: "from-green to-cyan",
    items: [
      { name: "Node.js", pct: 92 },
      { name: "Supabase", pct: 94 },
      { name: "PostgreSQL", pct: 88 },
      { name: "REST / GraphQL APIs", pct: 90 },
    ],
  },
  {
    title: "AI & Automation",
    color: "text-purple",
    barColor: "from-purple to-pink",
    items: [
      { name: "AI Agent Design", pct: 96 },
      { name: "Prompt Engineering", pct: 97 },
      { name: "OpenAI / LLMs", pct: 92 },
      { name: "Workflow Automation", pct: 90 },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "text-orange",
    barColor: "from-orange to-amber",
    items: [
      { name: "Git / GitHub", pct: 94 },
      { name: "Vercel / Hosting", pct: 92 },
      { name: "Docker", pct: 82 },
      { name: "CI/CD Pipelines", pct: 86 },
    ],
  },
];

const cmsData = [
  {
    name: "WordPress",
    type: "Headless & Custom",
    desc: "Custom themes, headless API, WooCommerce, plugin development. Best for content-heavy sites needing flexible admin control.",
    when: "Content sites, blogs, e-commerce with WordPress expertise",
  },
  {
    name: "Webflow",
    type: "Visual Builder",
    desc: "Pixel-perfect visual design with CMS capabilities. No code needed for content updates. Lightning-fast launch for marketing sites.",
    when: "Marketing sites, landing pages, designer-led projects",
  },
  {
    name: "Shopify",
    type: "E-Commerce",
    desc: "Custom Shopify storefronts, Liquid templating, headless Shopify with Next.js. Optimized checkout and conversion flows.",
    when: "Online stores, product catalogs, subscription commerce",
  },
  {
    name: "Strapi",
    type: "Headless CMS",
    desc: "Open-source headless CMS with full API control. Custom content types, roles, and permissions. Self-hosted freedom.",
    when: "Custom apps needing flexible content management",
  },
  {
    name: "Sanity",
    type: "Structured Content",
    desc: "Real-time collaborative editing, GROQ queries, portable text. Perfect for structured content that powers multiple frontends.",
    when: "Multi-platform content, complex editorial workflows",
  },
  {
    name: "Contentful",
    type: "Enterprise CMS",
    desc: "Enterprise-grade headless CMS with robust APIs, localization, and content delivery network. Built for scale and teams.",
    when: "Enterprise projects, multi-language, large content teams",
  },
];

export default function TechCms() {
  return (
    <section id="tech" className="section-pad relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-purple bottom-1/4 left-[-200px]" />
      <div className="blob w-[350px] h-[350px] bg-blue top-0 right-[-150px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionHeader
          badge="Technologies"
          title="Tech Stack &"
          highlight="CMS Expertise"
          subtitle="I combine custom development with the right CMS platform — choosing the best tool based on your business needs, budget, and scalability requirements."
        />

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-16">
          {stackGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="glass-card rounded-3xl p-7 interactive-card">
                <div className="relative z-10">
                  <h3
                    className={`text-base font-bold mb-6 ${group.color}`}
                  >
                    {group.title}
                  </h3>
                  <div className="space-y-5">
                    {group.items.map((item) => (
                      <div key={item.name}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-text">
                            {item.name}
                          </span>
                          <span className="text-text-4 text-xs font-mono">
                            {item.pct}%
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-surface-3 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${group.barColor} transition-all duration-1000`}
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CMS Header */}
        <Reveal>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold">
              CMS Platforms I{" "}
              <span className="grad-text">Master</span>
            </h3>
            <p className="text-text-3 mt-3 text-sm md:text-base max-w-2xl mx-auto">
              Knowing{" "}
              <strong className="text-text-2">when to use a CMS</strong> vs{" "}
              <strong className="text-text-2">when to build custom</strong> is
              what separates good developers from great solution architects.
            </p>
          </div>
        </Reveal>

        {/* CMS Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cmsData.map((cms, i) => (
            <Reveal key={cms.name} delay={i * 0.06}>
              <div className="glass-card rounded-3xl p-6 h-full group interactive-card gradient-border">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-base font-bold group-hover:text-cyan transition-colors duration-300">
                      {cms.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-cyan/10 text-cyan border border-cyan/10">
                      {cms.type}
                    </span>
                  </div>
                  <p className="text-sm text-text-2 leading-relaxed mb-4">
                    {cms.desc}
                  </p>
                  <div className="pt-3 border-t border-border">
                    <span className="text-[11px] text-text-4 font-medium uppercase tracking-wider">
                      Best for:
                    </span>
                    <p className="text-xs text-text-3 mt-1">{cms.when}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Custom vs CMS comparison */}
        <Reveal delay={0.2}>
          <div className="glass rounded-3xl p-8 md:p-10 mt-12 border-cyan/10 interactive-card">
            <div className="relative z-10 grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-cyan" />
                  <h4 className="text-lg font-bold text-cyan">
                    When to Build Custom
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-text-2">
                  {[
                    "Complex business logic and unique workflows",
                    "Full control over performance and architecture",
                    "SaaS products, dashboards, and web applications",
                    "Long-term scalability without platform limitations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-purple" />
                  <h4 className="text-lg font-bold text-purple">
                    When to Use CMS
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-text-2">
                  {[
                    "Content-heavy sites with frequent updates",
                    "Non-technical teams managing content",
                    "E-commerce with standard product catalogs",
                    "Faster time-to-market with lower initial cost",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
