import { useState } from "react";
import {
  Mail,
  Heart,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { Github, Linkedin, Twitter } from "./SocialIcons";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "AI Automation", href: "#automation" },
      { label: "AI Agent Design", href: "#ai-expertise" },
      { label: "Prompt Engineering", href: "#ai-expertise" },
      { label: "Web Development", href: "#services" },
      { label: "CMS Solutions", href: "#tech" },
      { label: "DevOps & Deployment", href: "#services" },
    ],
  },
  {
    title: "Technologies",
    links: [
      { label: "Next.js / React", href: "#tech" },
      { label: "TypeScript", href: "#tech" },
      { label: "Node.js", href: "#tech" },
      { label: "Supabase", href: "#tech" },
      { label: "WordPress", href: "#tech" },
      { label: "Webflow / Shopify", href: "#tech" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/mahmudulhassan-dev", external: true },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "Twitter / X", href: "https://twitter.com", external: true },
      { label: "Email", href: "mailto:hello@mahmudulhassan.dev" },
      { label: "Start a Project", href: "#contact" },
    ],
  },
];

const socialIcons = [
  { icon: Github, label: "GitHub", href: "https://github.com/mahmudulhassan-dev" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@mahmudulhassan.dev" },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const year = new Date().getFullYear();

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Ambient decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-surface/40 pointer-events-none" />
      <div className="blob w-[400px] h-[400px] bg-cyan bottom-0 left-[-200px] opacity-5" />
      <div className="blob w-[300px] h-[300px] bg-purple top-0 right-[-150px] opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Newsletter / CTA Banner */}
        <div className="py-10 lg:py-14 border-b border-border">
          <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden interactive-card">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-purple/5 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <Sparkles className="w-5 h-5 text-cyan" />
                  <h3 className="text-xl md:text-2xl font-bold">
                    Ready to Build Something{" "}
                    <span className="grad-text">Amazing</span>?
                  </h3>
                </div>
                <p className="text-sm text-text-3 max-w-md">
                  Let&apos;s transform your business with AI automation, custom
                  web solutions, and intelligent systems.
                </p>
              </div>
              <a
                href="#contact"
                className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan to-blue text-bg font-bold text-sm hover:glow-md transition-all duration-500 hover:scale-105 active:scale-95 flex-shrink-0"
              >
                <Zap className="w-4 h-4" />
                Start a Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center text-bg font-black text-sm glow-xs">
                  MH
                </div>
                <div>
                  <span className="text-lg font-bold text-text">
                    Mahmudul
                  </span>
                  <span className="text-cyan font-black text-xl">.</span>
                </div>
              </div>
              <p className="text-sm text-text-3 leading-relaxed mb-6 max-w-sm">
                AI Automation Expert & Full-Stack Developer building intelligent
                business solutions. I turn complex problems into elegant,
                scalable digital products that drive growth.
              </p>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green/10 border border-green/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                <span className="text-[11px] text-green font-medium">
                  Available for projects
                </span>
              </div>

              {/* Social icons */}
              <div className="flex gap-2.5">
                {socialIcons.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        s.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-4 hover:text-cyan hover:border-cyan/20 transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link Columns — Desktop */}
            <div className="lg:col-span-8 hidden lg:grid lg:grid-cols-3 gap-8">
              {footerSections.map((sec) => (
                <div key={sec.title}>
                  <h4 className="text-sm font-bold text-text mb-5 uppercase tracking-wider">
                    {sec.title}
                  </h4>
                  <ul className="space-y-3">
                    {sec.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={
                            "external" in link && link.external
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            "external" in link && link.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm text-text-3 hover:text-cyan transition-colors duration-300 inline-flex items-center gap-1.5 group"
                        >
                          <span className="w-0 group-hover:w-3 h-px bg-cyan transition-all duration-300" />
                          {link.label}
                          {"external" in link && link.external && (
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Link Columns — Mobile Accordion */}
            <div className="lg:hidden lg:col-span-8 space-y-2">
              {footerSections.map((sec, i) => (
                <div key={sec.title} className="glass rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full px-5 py-4 flex items-center justify-between text-sm font-bold text-text"
                    aria-expanded={openIndex === i}
                  >
                    {sec.title}
                    <ChevronDown
                      className={`w-4 h-4 text-text-4 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      openIndex === i ? "max-h-60 pb-4" : "max-h-0"
                    }`}
                  >
                    <ul className="px-5 space-y-2.5">
                      {sec.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-sm text-text-3 hover:text-cyan transition-colors flex items-center gap-1.5"
                          >
                            {link.label}
                            {"external" in link && link.external && (
                              <ArrowUpRight className="w-3 h-3" />
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-4 flex items-center gap-1">
            © {year} Mahmudul Hassan. All rights reserved.
          </p>
          <p className="text-xs text-text-4 flex items-center gap-1.5 flex-wrap justify-center">
            Built with{" "}
            <Heart className="w-3 h-3 text-pink" />
            using{" "}
            <span className="text-cyan">React</span> •{" "}
            <span className="text-cyan">TypeScript</span> •{" "}
            <span className="text-cyan">Tailwind CSS</span> •{" "}
            Powered by <span className="text-cyan">Vite</span>
            <Sparkles className="w-3 h-3 text-cyan" />
          </p>
        </div>
      </div>
    </footer>
  );
}
