import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const roles = [
  "AI Automation Expert",
  "Full-Stack Developer",
  "Prompt Engineer",
  "Business Solution Architect",
  "SaaS Product Builder",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = roles[roleIdx];
    if (!isDeleting && text.length < current.length) {
      setText(current.slice(0, text.length + 1));
    } else if (!isDeleting && text.length === current.length) {
      setTimeout(() => setIsDeleting(true), 2400);
      return;
    } else if (isDeleting && text.length > 0) {
      setText(text.slice(0, -1));
    } else if (isDeleting) {
      setIsDeleting(false);
      setRoleIdx((p) => (p + 1) % roles.length);
    }
  }, [text, isDeleting, roleIdx]);

  useEffect(() => {
    const speed = isDeleting ? 30 : 65;
    const t = setTimeout(tick, speed);
    return () => clearTimeout(t);
  }, [tick, isDeleting]);

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "AI Systems Built" },
    { value: "20+", label: "Automation Flows" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="blob w-[700px] h-[700px] bg-cyan top-[-20%] left-[-15%] animate-float" />
      <div
        className="blob w-[550px] h-[550px] bg-purple bottom-[-15%] right-[-12%]"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="blob w-[400px] h-[400px] bg-pink top-[45%] left-[55%]"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="blob w-[300px] h-[300px] bg-blue top-[20%] right-[20%]"
        style={{ animationDelay: "3s" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg)_72%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border-border-2 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
          <span className="text-sm text-text-2 font-medium">
            Open for AI automation & development projects
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] mb-7"
        >
          I Build{" "}
          <span className="grad-text-warm">Intelligent</span>
          <br />
          Digital Solutions
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="h-10 md:h-12 flex items-center justify-center mb-8"
        >
          <span className="text-lg md:text-xl lg:text-2xl font-semibold text-text-3 font-mono">
            {"> "}
          </span>
          <span className="text-lg md:text-xl lg:text-2xl font-semibold text-cyan ml-1 border-r-2 border-cyan pr-1 animate-typing font-mono">
            {text}
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-2xl mx-auto text-text-2 text-base md:text-lg leading-relaxed mb-12"
        >
          From{" "}
          <strong className="text-text">AI-powered business automation</strong>{" "}
          and <strong className="text-text">intelligent chatbots</strong> to{" "}
          <strong className="text-text">custom web platforms</strong> and{" "}
          <strong className="text-text">CMS solutions</strong> — I engineer
          products that scale your business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            id="hero-cta-work"
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan to-blue text-bg font-bold text-sm hover:glow-md transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-2.5"
          >
            <Sparkles className="w-4 h-4" />
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            id="hero-cta-contact"
            className="px-8 py-4 rounded-2xl border border-border-2 text-text font-bold text-sm hover:border-cyan/40 hover:bg-cyan/5 transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Let&apos;s Collaborate
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl px-4 py-5 text-center hover:border-cyan/20 transition-all duration-500 interactive-card"
            >
              <div className="relative z-10">
                <div className="text-2xl md:text-3xl font-black grad-text">
                  {s.value}
                </div>
                <div className="text-[11px] md:text-xs text-text-3 mt-1.5 font-medium">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-text-4 font-medium">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-cyan/50" />
      </a>
    </section>
  );
}
