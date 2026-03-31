import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Zap,
  Layers,
  FolderKanban,
  Brain,
  Mail,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#services", label: "Services", icon: Briefcase },
  { href: "#automation", label: "AI Automation", icon: Zap },
  { href: "#tech", label: "Tech & CMS", icon: Layers },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#ai-expertise", label: "AI Expertise", icon: Brain },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      id="main-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass-strong py-2.5 shadow-2xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group" id="nav-logo">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center text-bg font-black text-sm group-hover:glow-sm transition-all duration-500 group-hover:scale-105">
            MH
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-text">Mahmudul</span>
            <span className="text-cyan font-black text-xl">.</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 rounded-xl text-[13px] font-medium text-text-2 hover:text-cyan hover:bg-cyan/5 transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          id="nav-cta"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan to-blue text-bg text-sm font-semibold hover:glow-md transition-all duration-500 hover:scale-105 active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Start a Project
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-2 transition-colors"
          aria-label="Toggle menu"
          id="mobile-toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-text" />
          ) : (
            <Menu className="w-5 h-5 text-text" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
          >
            <div className="glass-strong mx-4 mt-3 rounded-2xl p-4 space-y-1 border border-border-2">
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-text-2 hover:text-cyan hover:bg-cyan/5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                    {l.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 mt-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-cyan to-blue text-bg text-sm font-semibold"
              >
                <Sparkles className="w-4 h-4" />
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
