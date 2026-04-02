"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "./SocialIcons";
import { ArrowRight, Sparkles, ShieldCheck, Mail, MapPin, Clock, Terminal, Globe, ArrowUpRight, ChevronDown } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [time, setTime] = useState("");
  const [developerMode, setDeveloperMode] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    const updateTime = () => {
      const dbhTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(dbhTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Blog / Insights", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "AI Automation", href: "#" },
      { name: "Custom LLM Apps", href: "#" },
      { name: "Full-Stack Web Dev", href: "#" },
      { name: "UI/UX Engineering", href: "#" },
      { name: "Cloud Architecture", href: "#" },
      { name: "SaaS Development", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Client Portal", href: "#" },
      { name: "Support AI", href: "#" },
      { name: "Open Source", href: "https://github.com/mahmudulhassan-dev" },
      { name: "Media Kit", href: "#" },
      { name: "Free Tools", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security Setup", href: "#" },
      { name: "Data Processing", href: "#" },
    ]
  };

  const toggleAccordion = (name: string) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  return (
    <footer className="relative pt-32 pb-12 overflow-hidden border-t border-white/5 bg-bg mt-32 z-10">
      {/* Background radial glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-[100%] blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-purple/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
        {/* Top CTA Section (Massive Impact) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card rounded-[3rem] sm:rounded-[4rem] p-10 md:p-16 mb-24 flex flex-col md:flex-row items-center justify-between gap-10 border-white/10 relative overflow-hidden group shadow-[0_30px_60px_rgba(0,192,255,0.05)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-transparent to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
          
          <div className="relative z-10 w-full md:w-auto text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface-2 border border-white/10 mb-8 glow-xs shadow-lg">
               <span className="w-2.5 h-2.5 rounded-full bg-green animate-pulse shadow-[0_0_10px_rgba(0,255,0,0.8)]" />
               <span className="text-[11px] font-bold text-text-2 uppercase tracking-[0.2em]">Available for new projects</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
              Ready to create something<br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue to-purple animate-gradient">Extraordinary?</span>
            </h2>
            <p className="text-text-3 text-base font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
              Let&apos;s engineer solutions that scale your business. From AI integrations to full-stack ecosystems.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 px-10 py-5 rounded-[2rem] bg-gradient-to-br from-cyan to-blue text-bg font-black text-sm uppercase tracking-widest hover:glow-md transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 w-full md:w-auto shrink-0 shadow-[0_20px_40px_rgba(0,192,255,0.3)] group/btn"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        {/* Global Controls & Newsletter */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10 mb-20 p-8 rounded-[2.5rem] bg-surface-2 border border-white/5 relative z-10 shadow-xl overflow-hidden">
           <div className="absolute right-0 top-0 w-64 h-64 bg-cyan/5 rounded-full blur-[80px]" />
           
           {/* Interactive Developer Toggle as requested by user */}
           <div className="relative z-10 flex flex-col sm:flex-row shadow-sm">
             <div className="flex items-center gap-6 p-1 rounded-2xl bg-surface border border-border-2 w-max">
               <button 
                 onClick={() => setDeveloperMode(false)}
                 className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                   !developerMode 
                     ? "bg-white/10 text-text shadow-md border border-white/5" 
                     : "text-text-4 hover:text-text-2"
                 }`}
               >
                 Client View
               </button>
               <button 
                 onClick={() => setDeveloperMode(true)}
                 className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                   developerMode 
                     ? "bg-cyan/10 text-cyan shadow-[0_0_15px_rgba(0,192,255,0.2)] border border-cyan/20 glow-text-sm" 
                     : "text-text-4 hover:text-cyan"
                 }`}
               >
                 <Terminal className="w-4 h-4" />
                 Dev Mode
               </button>
             </div>
           </div>

           {/* Newsletter / Priority Contact */}
           <div className="relative z-10 w-full xl:w-[450px]">
             <h4 className="text-xs font-black text-text-2 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
               <Mail className="w-4 h-4 text-cyan" />
               Join the Waitlist
             </h4>
             <form className="relative flex w-full h-14 bg-surface rounded-2xl border border-white/10 overflow-hidden focus-within:border-cyan/50 focus-within:shadow-[0_0_20px_rgba(0,192,255,0.1)] transition-all">
               <input 
                 type="email" 
                 placeholder="Enter your email address..." 
                 className="flex-1 bg-transparent px-5 text-sm outline-none text-text placeholder:text-text-4"
               />
               <button type="button" className="h-full px-6 bg-cyan/10 text-cyan font-bold text-xs uppercase tracking-widest hover:bg-cyan hover:text-bg transition-colors">
                 Subscribe
               </button>
             </form>
           </div>
        </div>

        {/* Dynamic Dev Mode Content */}
        <AnimatePresence mode="wait">
          {developerMode && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 80 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="glass-card rounded-3xl p-6 border-cyan/20 overflow-hidden mb-20"
            >
              <div className="flex items-center gap-3 mb-4 text-cyan font-mono text-xs">
                <Terminal className="w-4 h-4" />
                <span>~/system/logs</span>
              </div>
              <div className="font-mono text-[11px] text-text-4 space-y-2 leading-relaxed h-32 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-2 z-10" />
                <p><span className="text-green">[OK]</span> Initializing Antigravity core... Done.</p>
                <p><span className="text-green">[OK]</span> Connecting to Supabase MCP... Connected (ap-south-1)</p>
                <p><span className="text-yellow-400">[WARN]</span> Live Telegram Bot connection awaiting token.</p>
                <p><span className="text-green">[OK]</span> Next.js 16 Edge runtime stable.</p>
                <p><span className="text-cyan animate-pulse">_</span></p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Massive 6-Column Mega Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-24 relative z-10">
          
          {/* Column 1: Brand & Details (Takes 2 columns) */}
          <div className="col-span-1 md:col-span-2 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan to-blue flex items-center justify-center text-bg font-black text-xl shadow-[0_0_20px_rgba(0,192,255,0.4)] group overflow-hidden relative">
                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <span className="relative z-10 group-hover:scale-110 transition-transform">MH</span>
               </div>
               <div>
                  <h3 className="text-2xl font-bold tracking-tight text-text">Mahmudul Hassan</h3>
                  <p className="text-xs text-cyan uppercase tracking-widest font-bold">Solutions Architect</p>
               </div>
            </div>
            <p className="text-text-3 text-sm leading-relaxed mb-10 max-w-sm">
              Bridging the gap between complex engineering and beautiful design. Delivering enterprise-grade SaaS platforms, AI systems, and robust Web Architectures.
            </p>
            
            {/* Dynamic Status Badges */}
            <div className="flex flex-col gap-4 mt-auto">
               <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-surface-2 group hover:border-white/10 transition-colors w-max">
                 <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center border border-cyan/20 group-hover:glow-xs transition-shadow">
                   <Clock className="w-5 h-5 text-cyan" />
                 </div>
                 <div>
                   <h5 className="text-[10px] text-text-4 font-bold uppercase tracking-widest mb-1">Local Time (DHAKA)</h5>
                   <p className="font-mono text-sm text-text font-bold">{time || "Loading..."}</p>
                 </div>
               </div>

               <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-surface-2 group hover:border-white/10 transition-colors w-max">
                 <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center border border-purple/20 group-hover:glow-xs transition-shadow">
                   <Globe className="w-5 h-5 text-purple" />
                 </div>
                 <div>
                   <h5 className="text-[10px] text-text-4 font-bold uppercase tracking-widest mb-1">Current Availability</h5>
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                     <p className="text-sm font-bold text-green uppercase tracking-wider">Accepting Clients</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Links Columns (4 Columns) */}
          {[
            { title: "Navigation", links: footerLinks.navigation },
            { title: "Services", links: footerLinks.services },
            { title: "Resources", links: footerLinks.resources },
            { title: "Legal", links: footerLinks.legal },
          ].map((column) => (
            <div key={column.title} className="col-span-1">
              {/* Desktop View */}
              <div className="hidden lg:block">
                <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-8 pb-4 border-b border-white/5 inline-block">
                  {column.title}
                </h4>
                <ul className="space-y-4">
                   {column.links.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-sm font-medium text-text-4 hover:text-cyan hover:translate-x-1 transition-all flex items-center gap-2 group">
                          {link.name}
                          {link.href.startsWith("http") && <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan" />}
                        </a>
                      </li>
                   ))}
                </ul>
              </div>

              {/* Mobile Accordion View */}
              <div className="block lg:hidden border-b border-white/5 pb-2 mb-2">
                <button 
                  onClick={() => toggleAccordion(column.title)}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-xs font-black text-white uppercase tracking-[0.2em]">{column.title}</span>
                  <ChevronDown className={`w-4 h-4 text-text-4 transition-transform duration-300 ${activeAccordion === column.title ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeAccordion === column.title && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-4 pb-6 pt-2">
                        {column.links.map((link) => (
                          <li key={link.name}>
                            <a href={link.href} className="text-sm font-medium text-text-3 hover:text-cyan pl-2 border-l-2 border-transparent hover:border-cyan transition-all flex items-center gap-2">
                              {link.name}
                              {link.href.startsWith("http") && <ArrowUpRight className="w-3 h-3 text-cyan" />}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Global Social Ribbon */}
        <div className="py-8 border-y border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 relative z-10 bg-surface-2/30 px-6 rounded-3xl">
           <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-cyan/50" />
              <div>
                <span className="block text-[10px] font-bold text-text-4 uppercase tracking-[0.2em] mb-1">Infrastructure Platform</span>
                <span className="block text-xs text-text-2 font-medium">Powered by Next.js 16 & Vercel Edge</span>
              </div>
           </div>
           
           <div className="flex gap-4">
              {[
                { Icon: GithubIcon, href: "https://github.com/mahmudulhassan-dev", color: "hover:bg-white hover:text-black hover:border-white" },
                { Icon: LinkedinIcon, href: "https://linkedin.com/in/mahmudulhassan-dev", color: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]" },
                { Icon: TwitterIcon, href: "https://twitter.com/mahmudulhassan", color: "hover:bg-cyan hover:text-white hover:border-cyan" },
                { Icon: InstagramIcon, href: "https://instagram.com/mahmudulhassan", color: "hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]" },
              ].map((s, i) => (
                <a 
                  key={i} 
                  href={s.href} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label={`Follow Mahmudul on ${s.Icon.name || 'Social Media'}`}
                  className={`w-12 h-12 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-text-4 transition-all duration-300 hover:scale-110 active:scale-95 group/icon ${s.color}`}
                >
                  <s.Icon className="w-5 h-5 group-hover/icon:glow-text-sm" />
                </a>
              ))}
           </div>
        </div>

        {/* Bottom Final Legal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 pb-8 text-center md:text-left">
          <div className="text-[10px] sm:text-xs font-bold text-text-4 uppercase tracking-[0.1em] md:tracking-[0.2em] flex flex-wrap items-center justify-center md:justify-start gap-4">
             <span>© {currentYear} Mahmudul Hassan</span>
             <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-border" />
             <span className="text-cyan">All Rights Reserved</span>
             <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-border" />
             <span>Remote Worldwide</span>
          </div>
          
          <div className="flex items-center gap-3 flex-wrap justify-center">
             {[
               { name: "Next.js", icon: "💎" },
               { name: "React 19", icon: "⚛️" },
               { name: "Supabase", icon: "🟢" },
               { name: "Framer", icon: "✨" },
             ].map((t) => (
               <div key={t.name} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-2 border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-sm">{t.icon}</span>
                  <span className="text-[10px] font-bold text-text-3 tracking-widest uppercase">{t.name}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
