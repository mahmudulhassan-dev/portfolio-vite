"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  Layers,
  FolderKanban,
  User,
  Mail,
  Sparkles,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#services", label: "Solutions", icon: Briefcase }, // Consolidates Services + AI Automation
  { href: "#tech", label: "Expertise", icon: Layers }, // Consolidates Tech + AI Expertise
  { href: "#projects", label: "Portfolio", icon: FolderKanban }, // Professional rename for Projects
  { href: "#about", label: "About", icon: User },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy 
      const sections = links.map(l => l.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveHash(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass-strong py-3 shadow-2xl shadow-black/40"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group relative overflow-hidden" aria-label="Mahmudul Hassan — Back to Home">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan via-blue to-purple flex items-center justify-center text-bg font-black text-sm glow-xs transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-lg">
            MH
          </div>
          <div className="hidden sm:block">
            <span className="text-xl font-bold tracking-tight text-text">Mahmudul</span>
            <span className="text-cyan font-black text-2xl">.</span>
          </div>
        </a>

        {/* Desktop Links - Best-in-class results-oriented */}
        <div className="hidden lg:flex items-center gap-1.5 p-1.5 glass rounded-2xl border-white/5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-5 py-2.5 rounded-xl text-[13px] font-bold tracking-wide transition-all duration-500 ${
                activeHash === l.href 
                  ? "text-cyan bg-cyan/10 shadow-[0_0_15px_rgba(0,192,255,0.1)]" 
                  : "text-text-3 hover:text-text hover:bg-white/5"
              }`}
            >
              <span className="relative z-10">{l.label}</span>
              {activeHash === l.href && (
                <motion.div 
                  layoutId="nav-active"
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,192,255,0.8)]"
                />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Primary CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            aria-label="Start a project with Mahmudul"
            className="group inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan/90 to-blue text-bg text-[13px] font-black uppercase tracking-widest hover:glow-md transition-all duration-500 hover:scale-[1.03] active:scale-95 shadow-xl shadow-cyan/10 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
            <Sparkles className="w-4 h-4 animate-pulse" />
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-2xl glass-card border-white/10 text-cyan hover:glow-xs transition-all shadow-xl group"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6 transform group-active:scale-90 transition-transform" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Sleek Full Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col bg-bg/95 backdrop-blur-3xl pt-28 px-6 pb-12"
          >
            <div className="flex-1 flex flex-col justify-center gap-2">
              {links.map((l, i) => {
                const Icon = l.icon;
                return (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.2 }}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between p-5 rounded-3xl group transition-all ${
                      activeHash === l.href 
                        ? "bg-cyan/10 border border-cyan/20" 
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                         activeHash === l.href ? "bg-cyan text-bg glow-xs" : "bg-surface-2 text-text-4 group-hover:text-cyan group-hover:bg-cyan/10"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xl font-bold tracking-tight ${activeHash === l.href ? "text-cyan" : "text-text-2"}`}>
                        {l.label}
                      </span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${activeHash === l.href ? "text-cyan" : "text-text-4"}`} />
                  </motion.a>
                );
              })}
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="mt-auto space-y-4 pt-8 border-t border-white/5"
            >
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-5 rounded-[2.5rem] bg-gradient-to-r from-cyan to-blue text-bg text-base font-black uppercase tracking-widest shadow-2xl shadow-cyan/20"
              >
                <Sparkles className="w-5 h-5" />
                Start a Project
              </a>
              <div className="text-center text-[10px] uppercase font-bold text-text-4 tracking-[0.3em]">
                Mahmudul Hassan — AI Automation Ecosystems
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
