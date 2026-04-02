"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, MapPin, Calendar, Sparkles, PhoneCall, Paperclip, Clock, ShieldCheck, ChevronDown, Globe } from "lucide-react";
import { SectionHeader } from "./ui/motion";
import { supabase } from "@/lib/supabase";
import axios from "axios";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [budget, setBudget] = useState(5000);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", brief: "" });
 
  const servicesList = [
    "AI Automation", "Custom SaaS", "Web Apps", "API Integration", "UI/UX Design", "Consulting"
  ];
 
  const faqs = [
    { q: "What is your typical project timeline?", a: "Most MVP builds take 4-8 weeks. Complex AI ecosystems or enterprise SaaS platforms take 3-6 months depending on requirements." },
    { q: "Do you work with startups?", a: "Absolutely. I specialize in helping founders build scalable MVPs rapidly using Next.js and Supabase." },
    { q: "What are your payment terms?", a: "Typically 50% upfront to secure a spot in my calendar, and 50% upon successful delivery and deployment." },
  ];
 
  const toggleService = (srv: string) => {
    setSelectedServices(prev => prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]);
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      // 1. Save to Supabase
      const { error } = await supabase.from("contact_inquiries").insert({
        name: formData.name,
        email: formData.email,
        budget: budget,
        services: selectedServices,
        brief: formData.brief
      });

      if (error) throw error;

      // 2. Trigger Telegram Alert (via your API)
      await axios.post("/api/chat", {
        messages: [{ role: "user", content: `📩 [LEAD] NEW INQUIRY:\n\nName: ${formData.name}\nEmail: ${formData.email}\nBudget: $${budget}\nServices: ${selectedServices.join(", ")}\n\nBrief: ${formData.brief}` }],
        type: "text"
      });

      setStatus("success");
    } catch (err) {
      console.error("Submission error:", err);
      alert("There was an error sending your brief. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-bg">
      {/* Immersive Background Effects */}
      <div className="absolute top-[20%] right-0 w-[800px] h-[800px] bg-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
        <SectionHeader
          align="center"
          badge="Initialization"
          title="Start Your Digital Evolution"
          subtitle="Whether you need a full enterprise system, an AI copilot, or a massive web application, I am ready to architect your vision."
        />

        {/* Top Floating Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 mb-20 p-6 sm:p-4 rounded-[2rem] glass-card border-white/5 shadow-xl max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3">
             <span className="w-3 h-3 rounded-full bg-green animate-pulse shadow-[0_0_15px_rgba(0,255,0,0.8)]" />
             <span className="text-xs font-black uppercase tracking-widest text-text-2">Accepting Projects</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div className="flex items-center gap-3">
             <Globe className="w-5 h-5 text-cyan" />
             <span className="text-xs font-black uppercase tracking-widest text-text-2">Worldwide Clients</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div className="flex items-center gap-3">
             <ShieldCheck className="w-5 h-5 text-purple" />
             <span className="text-xs font-black uppercase tracking-widest text-text-2">NDA Friendly</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Booking */}
          <div className="lg:col-span-5 space-y-10">
            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-6 rounded-3xl bg-surface-2 border border-white/5 hover:border-cyan/30 hover:bg-cyan/5 transition-all group flex flex-col items-center sm:items-start text-center sm:text-left">
                 <div className="w-12 h-12 rounded-2xl bg-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <Mail className="w-6 h-6 text-cyan" />
                 </div>
                 <h4 className="text-[10px] font-black text-text-4 uppercase tracking-[0.2em] mb-2">Direct Email</h4>
                 <a href="mailto:hello@mahmudulhassan.dev" className="text-sm font-bold text-text hover:text-cyan transition-colors line-clamp-1">
                   hello@mahmudulhassan.dev
                 </a>
               </div>
               
               <div className="p-6 rounded-3xl bg-surface-2 border border-white/5 hover:border-blue/30 hover:bg-blue/5 transition-all group flex flex-col items-center sm:items-start text-center sm:text-left">
                 <div className="w-12 h-12 rounded-2xl bg-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <MapPin className="w-6 h-6 text-blue" />
                 </div>
                 <h4 className="text-[10px] font-black text-text-4 uppercase tracking-[0.2em] mb-2">Operating Zone</h4>
                 <p className="text-sm font-bold text-text">UTC+6 • Async Ready</p>
               </div>
            </div>

            {/* Direct Booking CTA */}
            <motion.div
               whileHover={{ scale: 1.02 }}
               className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-cyan/10 via-blue/5 to-purple/10 border border-cyan/20 shadow-[0_0_40px_rgba(0,192,255,0.1)] relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/20 blur-[50px] group-hover:bg-cyan/40 transition-colors" />
               <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-cyan/20 border border-cyan/30 flex items-center justify-center shadow-lg">
                     <Calendar className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-text mb-1">Skip the Form</h4>
                    <p className="text-xs font-black text-cyan uppercase tracking-widest">Book a Discovery Call</p>
                  </div>
               </div>
               <p className="text-text-3 text-sm leading-relaxed mb-8 relative z-10 font-medium">
                  Have a clear vision and budget? Let's bypass the emails and talk strategy face-to-face via Google Meet.
               </p>
                <button 
                  aria-label="Schedule a 15-minute discovery call with Mahmudul"
                  className="w-full py-4 rounded-xl bg-surface border border-white/10 text-xs font-black uppercase tracking-[0.2em] text-cyan hover:bg-cyan hover:text-bg transition-colors shadow-lg relative z-10 flex items-center justify-center gap-3"
                >
                  <PhoneCall className="w-4 h-4" /> Schedule 15-min Call
                </button>
            </motion.div>

            {/* FAQs Accordion */}
            <div>
               <h4 className="text-xs font-black text-text-4 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                 <Sparkles className="w-4 h-4 text-purple" /> Client FAQ
               </h4>
               <div className="space-y-3">
                 {faqs.map((faq, i) => (
                   <div key={i} className="rounded-2xl border border-white/5 bg-surface-2 overflow-hidden">
                     <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors">
                        <span className="text-sm font-bold text-text-2">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-text-4 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`} />
                     </button>
                     <AnimatePresence>
                        {activeFaq === i && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                             <p className="p-5 pt-0 text-sm text-text-3 font-medium leading-relaxed border-t border-white/5 bg-surface-2/50 mt-2">
                               {faq.a}
                             </p>
                          </motion.div>
                        )}
                     </AnimatePresence>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Right Column: Advanced AI Intake Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-[3rem] p-6 sm:p-10 relative overflow-hidden shadow-2xl border-white/10"
          >
            {status === "success" ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="h-[600px] flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green/20 to-cyan/20 flex items-center justify-center mb-8 border border-green/30 shadow-[0_0_50px_rgba(0,255,0,0.2)]">
                  <CheckCircle2 className="w-12 h-12 text-green" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-text-4">Project Brief Received</h3>
                <p className="text-text-3 text-base max-w-sm mx-auto mb-10 leading-relaxed font-medium">
                  Your inquiry has been processed securely. Our AI is analyzing your requirements, and Mahmudul will contact you within 24 hours.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setStatus("idle")} className="px-8 py-4 rounded-xl border border-white/10 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-colors">
                     Submit Another
                  </button>
                  <a href="#home" className="px-8 py-4 rounded-xl bg-cyan/10 text-cyan text-xs font-black uppercase tracking-[0.2em] hover:bg-cyan hover:text-bg transition-colors shadow-lg">
                     Return Home
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-px bg-gradient-to-r from-cyan/50 to-transparent flex-1" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan">Project Details</span>
                  <div className="h-px bg-gradient-to-l from-cyan/50 to-transparent flex-1" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="contact-name" className="text-xs font-black text-text-4 uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input required name="name" id="contact-name" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full h-14 bg-surface-2 border border-border-2 focus:border-cyan/50 focus:shadow-[0_0_15px_rgba(0,192,255,0.1)] rounded-2xl px-5 text-sm transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="contact-email" className="text-xs font-black text-text-4 uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input required name="email" id="contact-email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full h-14 bg-surface-2 border border-border-2 focus:border-cyan/50 focus:shadow-[0_0_15px_rgba(0,192,255,0.1)] rounded-2xl px-5 text-sm transition-all outline-none" placeholder="john@enterprise.com" />
                  </div>
                </div>

                {/* Services Checkboxes */}
                <div className="space-y-4">
                   <label className="text-xs font-black text-text-4 uppercase tracking-[0.2em] px-2">Areas of Interest</label>
                   <div className="flex flex-wrap gap-3">
                      {servicesList.map(srv => (
                        <button 
                          key={srv} type="button" 
                          onClick={() => toggleService(srv)}
                          className={`px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                            selectedServices.includes(srv) 
                              ? "bg-cyan/10 border border-cyan/30 text-cyan shadow-[0_0_15px_rgba(0,192,255,0.15)] glow-text-sm" 
                              : "bg-surface-2 border border-border-2 text-text-4 hover:border-white/20 hover:text-text-2"
                          }`}
                        >
                          {selectedServices.includes(srv) && <CheckCircle2 className="w-3 h-3 inline-block mr-2 text-cyan" />}
                          {srv}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Advanced Budget Range Slider */}
                <div className="space-y-4 bg-surface-2/50 p-6 rounded-3xl border border-white/5">
                   <div className="flex items-center justify-between mb-4">
                     <label className="text-xs font-black text-text-4 uppercase tracking-[0.2em]">Project Budget Estimation</label>
                     <span className="text-sm font-black text-cyan font-mono bg-cyan/10 px-3 py-1 rounded-lg border border-cyan/20">
                       ${budget >= 20000 ? "20,000+" : budget.toLocaleString()}
                     </span>
                   </div>
                   <input 
                     type="range" min="1000" max="20000" step="1000"
                     value={budget} onChange={(e) => setBudget(Number(e.target.value))}
                     className="w-full h-2 bg-surface rounded-full appearance-none cursor-pointer accent-cyan outline-none"
                   />
                   <div className="flex justify-between text-[10px] font-bold text-text-4 uppercase tracking-widest mt-2">
                     <span>$1k (Min)</span>
                     <span>$10k</span>
                     <span>$20k+ (Enterprise)</span>
                   </div>
                </div>

                <div className="space-y-3 relative">
                  <label className="text-xs font-black text-text-4 uppercase tracking-[0.2em] px-2 flex items-center justify-between">
                    <span>Project Brief <span className="text-red-400">*</span></span>
                    <button 
                      type="button" 
                      aria-label="Attach NDA or project specification file"
                      className="text-[10px] text-cyan hover:text-text flex items-center gap-1"
                    >
                      <Paperclip className="w-3 h-3" /> Attach NDA/Spec
                    </button>
                  </label>
                  <textarea
                    required name="brief" id="contact-brief" rows={5}
                    value={formData.brief} onChange={e => setFormData({...formData, brief: e.target.value})}
                    className="w-full bg-surface-2 border border-border-2 focus:border-cyan/50 focus:shadow-[0_0_15px_rgba(0,192,255,0.1)] rounded-[1.5rem] p-6 text-sm transition-all outline-none resize-none custom-scrollbar leading-relaxed"
                    placeholder="Describe your vision, current challenges, and desired outcomes..."
                  />
                </div>

                <button
                  disabled={status === "sending"}
                  type="submit"
                  className="w-full h-16 rounded-2xl bg-gradient-to-r from-cyan via-blue to-purple text-bg font-black text-sm tracking-widest uppercase hover:glow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-cyan/20 flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-2xl" />
                  {status === "sending" ? (
                      <div className="flex gap-2 relative z-10">
                        <span className="w-2 h-2 bg-bg rounded-full animate-bounce shadow-md" />
                        <span className="w-2 h-2 bg-bg rounded-full animate-bounce [animation-delay:0.2s] shadow-md" />
                        <span className="w-2 h-2 bg-bg rounded-full animate-bounce [animation-delay:0.4s] shadow-md" />
                      </div>
                  ) : (
                    <span className="relative z-10 flex items-center gap-3">
                      Submit Secure Inquiry
                      <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </span>
                  )}
                </button>
                <p className="text-center text-[10px] text-text-4 font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                   <Clock className="w-3 h-3" /> Average response time: 2.4 Hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
