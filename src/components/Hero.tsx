"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "AI Automation Expert";
  const speed = 100;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border-2 text-cyan text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Open for AI automation & development projects
          </motion.div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 text-left">
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-7"
            >
              I Architect <span className="grad-text-warm">Intelligent</span>
              <br />
              AI & Digital Systems
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="h-10 flex items-center justify-start mb-8"
            >
              <span className="text-lg md:text-xl font-semibold text-text-3 font-mono">
                {"> "}
              </span>
              <span className="text-lg md:text-xl font-semibold text-cyan ml-1 border-r-2 border-cyan pr-1 animate-typing font-mono">
                {text}
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="max-w-xl text-text-2 text-base md:text-lg leading-relaxed mb-10"
            >
              From <strong className="text-text">business workflow automation</strong> and <strong className="text-text">custom AI agents</strong> to <strong className="text-text">scalable SaaS ecosystems</strong> — I engineer high-performance solutions that scale your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4"
            >
              <a
                href="#projects"
                id="hero-cta-work"
                className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan to-blue text-bg font-bold text-sm hover:glow-md transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
              >
                <Sparkles className="w-4 h-4" />
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                id="hero-cta-contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-border-2 text-text font-bold text-sm hover:border-cyan/40 hover:bg-cyan/5 transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Collaborate
              </a>
            </motion.div>
          </div>

          {/* Image / 3D Element Column */}
          <div className="lg:col-span-5 relative perspective-1000">
            <motion.div
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square max-w-[450px] mx-auto group cursor-crosshair"
            >
              {/* Outer Glows */}
              <div className="absolute inset-x-0 inset-y-0 rounded-[2.5rem] bg-gradient-to-br from-cyan/30 to-purple/30 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 -z-10" />
              
              {/* Image Frame */}
              <div className="relative h-full w-full rounded-[2.5rem] p-1 glass-card overflow-hidden gradient-border group-hover:scale-[1.02] transition-transform duration-700">
                <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden">
                  <img 
                    src="/mahmudul.jpg" 
                    alt="Mahmudul Hassan — AI Automation Architect & Lead Developer"
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 glass rounded-2xl flex items-center justify-center border-white/10 glow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-blue flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-bg" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 glass rounded-3xl p-5 border-white/10 glow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
                  <span className="text-xs font-bold text-text-2">System: Active</span>
                </div>
                <div className="mt-2 text-[10px] font-mono text-cyan/70">
                  MAHMUDUL_OS v4.0.1
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "AI Systems Built", value: "30+" },
            { label: "Automation Flows", value: "20+" },
            { label: "Client Satisfaction", value: "100%" },
          ].map((s, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 hover-glow border-white/10 transition-all duration-500"
            >
              <div className="text-3xl font-black text-cyan mb-1">{s.value}</div>
              <div className="text-xs text-text-4 font-bold uppercase tracking-widest leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
