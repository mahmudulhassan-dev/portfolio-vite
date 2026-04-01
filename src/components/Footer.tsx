"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "./SocialIcons";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "About Me", href: "#about" },
    ],
    services: [
      { name: "AI Automation", href: "#services" },
      { name: "AI Agents/Prompt", href: "#services" },
      { name: "Full-Stack Dev", href: "#services" },
      { name: "CMS Solutions", href: "#services" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Client Portal", href: "#" },
      { name: "Support AI", href: "#" },
      { name: "API Docs", href: "#" },
    ]
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-white/5 bg-bg">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-5 sm:px-8">
        {/* Top CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border-cyan/10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to start <span className="grad-text">A Project?</span></h2>
            <p className="text-text-3 text-sm font-medium uppercase tracking-widest leading-relaxed">
              Let&apos;s build an intelligent digital ecosystem together.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan to-blue text-bg font-black text-sm hover:glow-md transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-3 shrink-0"
          >
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          {/* Brand Identity */}
          <div className="col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center text-bg font-black text-sm glow-xs">
                 MH
               </div>
               <span className="text-2xl font-bold tracking-tight">Mahmudul Hassan</span>
            </div>
            <p className="text-text-3 text-sm leading-relaxed mb-8 max-w-sm">
              Architecting intelligent digital solutions with a focus on AI automation, clean systems, and high-performance engineering.
            </p>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-surface border border-border-2 glow-xs-green">
               <div className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
               <span className="text-[10px] font-bold text-green uppercase tracking-[0.2em]">AI Systems: Operational</span>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-black text-cyan uppercase tracking-[0.3em] mb-6">Navigation</h4>
            <ul className="space-y-4">
               {footerLinks.navigation.map((l) => (
                  <li key={l.name}>
                    <a href={l.href} className="text-sm font-semibold text-text-4 hover:text-cyan transition-colors">{l.name}</a>
                  </li>
               ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[10px] font-black text-cyan uppercase tracking-[0.3em] mb-6">Services</h4>
            <ul className="space-y-4">
               {footerLinks.services.map((l) => (
                  <li key={l.name}>
                    <a href={l.href} className="text-sm font-semibold text-text-4 hover:text-cyan transition-colors">{l.name}</a>
                  </li>
               ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
             <h4 className="text-[10px] font-black text-cyan uppercase tracking-[0.3em] mb-6">Connect</h4>
             <div className="grid grid-cols-4 gap-3 mb-8">
                {[
                  { Icon: GithubIcon, href: "https://github.com/mahmudulhassan-dev" },
                  { Icon: LinkedinIcon, href: "https://linkedin.com/in/mahmudulhassan-dev" },
                  { Icon: TwitterIcon, href: "https://twitter.com/mahmudulhassan" },
                  { Icon: InstagramIcon, href: "https://instagram.com/mahmudulhassan" },
                ].map((s, i) => (
                  <a 
                    key={i} 
                    href={s.href} 
                    target="_blank" 
                    className="w-full aspect-square rounded-2xl bg-surface border border-border flex items-center justify-center text-text-4 hover:border-cyan/40 hover:text-cyan transition-all hover:scale-110 active:scale-95 group/icon"
                  >
                    <s.Icon className="w-5 h-5 group-hover/icon:glow-text-sm" />
                  </a>
                ))}
             </div>
             <div className="p-4 rounded-2xl glass-card border-white/5 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan opacity-40" />
                <span className="text-[10px] font-bold text-text-4 uppercase tracking-[0.1em]">Secure Infrastructure Encrypted</span>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[10px] font-bold text-text-4 uppercase tracking-[0.2em] order-2 md:order-1 flex items-center gap-4">
             <span>© {currentYear} Mahmudul Hassan</span>
             <span className="w-1 h-1 rounded-full bg-border" />
             <span>Bangladesh • Remote Worldwide</span>
          </div>
          
          <div className="flex items-center gap-4 order-1 md:order-2 flex-wrap justify-center">
             {[
               { name: "Next.js 16", icon: "💎" },
               { name: "React 19", icon: "⚛️" },
               { name: "Tailwind 4", icon: "🌊" },
               { name: "Framer", icon: "✨" },
             ].map((t) => (
               <div key={t.name} className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border-white/5">
                  <span className="text-xs">{t.icon}</span>
                  <span className="text-[9px] font-bold text-text-4 tracking-widest">{t.name}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
