"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, MessageSquare, MapPin, Calendar, Sparkles } from "lucide-react";
import { SectionHeader } from "./ui/motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-surface/30">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              align="left"
              badge="Collaboration"
              title="Let's Build Something Intelligent"
              subtitle="Ready to automate your business or build a high-performance digital product? Let&apos;s talk about your vision."
            />

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-4 uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-text font-bold">hello@mahmudulhassan.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-4 uppercase tracking-widest mb-1">Presence</h4>
                  <p className="text-text font-bold">Remote • Worldwide (UTC+6)</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-4 uppercase tracking-widest mb-1">Response Time</h4>
                  <p className="text-text font-bold">Within 24 business hours</p>
                </div>
              </div>
            </div>

            <motion.div
               initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
               className="p-8 rounded-[2.5rem] bg-gradient-to-br from-cyan/10 via-blue/5 to-purple/5 border border-white/10 shadow-2xl"
            >
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center">
                     <Sparkles className="w-5 h-5 text-cyan" />
                  </div>
                  <h4 className="text-xl font-black italic grad-text">PRO HIRE</h4>
               </div>
               <p className="text-text-3 text-sm leading-relaxed mb-8">
                  Currently accepting <strong>high-impact projects</strong> where AI and automation can deliver significant ROI.
               </p>
               <div className="flex flex-wrap gap-2">
                   {["Fixed Price", "Retainer", "Consulting"].map((p) => (
                      <span key={p} className="px-3 py-1 rounded-lg bg-surface-2 border border-border text-[9px] font-black uppercase tracking-widest">{p}</span>
                   ))}
               </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
          >
            {status === "success" ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-green/20 flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-green" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text">Message Received!</h3>
                <p className="text-text-3 max-w-xs mx-auto">
                  Thank you for reaching out. I'll review your inquiry and get back to you within 24 hours.
                </p>
                <button
                   onClick={() => setStatus("idle")}
                   className="mt-10 text-cyan text-xs font-black uppercase tracking-widest hover:text-text transition-colors"
                >
                   Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-4 uppercase tracking-widest px-2">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-surface-2/50 border border-border focus:border-cyan/50 focus:bg-surface-2 rounded-2xl px-6 py-4 text-sm transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-4 uppercase tracking-widest px-2">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-surface-2/50 border border-border focus:border-cyan/50 focus:bg-surface-2 rounded-2xl px-6 py-4 text-sm transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-text-4 uppercase tracking-widest px-2">Project Type</label>
                    <select className="w-full bg-surface-2/50 border border-border focus:border-cyan/50 focus:bg-surface-2 rounded-2xl px-6 py-4 text-sm appearance-none cursor-pointer transition-all">
                       <option>AI Automation System</option>
                       <option>Full-Stack Web App</option>
                       <option>SaaS Product Development</option>
                       <option>CMS or E-Commerce</option>
                       <option>Consulting / Audit</option>
                    </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-4 uppercase tracking-widest px-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-surface-2/50 border border-border focus:border-cyan/50 focus:bg-surface-2 rounded-2xl px-6 py-4 text-sm transition-all resize-none"
                    placeholder="Briefly describe your project goals..."
                  />
                </div>

                <button
                  disabled={status === "sending"}
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-gradient-to-r from-cyan to-blue text-bg font-black text-sm hover:glow-md transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {status === "sending" ? (
                      <div className="flex gap-1.5 pt-1">
                        <span className="w-1.5 h-1.5 bg-bg rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-bg rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-bg rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send My Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
