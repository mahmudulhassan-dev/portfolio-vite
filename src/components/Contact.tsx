import { useState } from "react";
import { Reveal, SectionHeader } from "@/components/ui/motion";
import {
  Mail,
  Briefcase,
  Globe,
  Zap,
  Bot,
  Send,
  Check,
  Loader2,
} from "lucide-react";
import { Github, Linkedin, Twitter } from "./SocialIcons";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mahmudulhassan.dev",
    href: "mailto:hello@mahmudulhassan.dev",
  },
  { icon: Briefcase, label: "Availability", value: "Freelance & Contract" },
  { icon: Globe, label: "Location", value: "Bangladesh • Remote Worldwide" },
  { icon: Zap, label: "Response", value: "Usually within 12 hours" },
  {
    icon: Bot,
    label: "Speciality",
    value: "AI Automation & Full-Stack Dev",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/mahmudulhassan-dev" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — connect to backend API
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-purple bottom-0 left-[-100px]" />
      <div className="blob w-[350px] h-[350px] bg-cyan top-1/3 right-[-100px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build"
          highlight="Together"
          subtitle="Ready to automate your business, build a custom platform, or create an AI system? Let's talk about your project."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info Column */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} direction="left">
                  <div className="glass-card rounded-2xl p-4 flex items-start gap-4 !transform-none interactive-card">
                    <div className="relative z-10 flex items-start gap-4 w-full">
                      <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-cyan" />
                      </div>
                      <div>
                        <div className="text-[10px] text-text-4 font-semibold uppercase tracking-widest">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-text hover:text-cyan transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm text-text">{item.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            {/* Socials */}
            <Reveal direction="left" delay={0.2}>
              <div className="flex gap-2.5 pt-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-4 hover:text-cyan hover:border-cyan/20 transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal className="lg:col-span-3" direction="right">
            <form
              onSubmit={submit}
              className="glass-card rounded-3xl p-7 md:p-9 space-y-5 !transform-none"
              id="contact-form"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your name",
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "your@email.com",
                  },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={`contact-${f.id}`}
                      className="block text-[10px] font-semibold text-text-4 mb-2 uppercase tracking-widest"
                    >
                      {f.label}
                    </label>
                    <input
                      id={`contact-${f.id}`}
                      type={f.type}
                      required
                      value={form[f.id as keyof typeof form]}
                      onChange={(e) =>
                        setForm({ ...form, [f.id]: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text text-sm placeholder:text-text-4 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all duration-300"
                      placeholder={f.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[10px] font-semibold text-text-4 mb-2 uppercase tracking-widest"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text text-sm placeholder:text-text-4 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all duration-300"
                  placeholder="AI Automation / Website / CMS / Other"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[10px] font-semibold text-text-4 mb-2 uppercase tracking-widest"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text text-sm placeholder:text-text-4 focus:outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project — what you want to build, goals, timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                id="contact-submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan to-blue text-bg font-bold text-sm hover:glow-md transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <Check className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
