import { Reveal } from "@/components/ui/motion";
import { SectionHeader } from "@/components/ui/motion";
import {
  Target,
  Bot,
  Code2,
  Blocks,
  Rocket,
  Globe,
  ArrowRight,
} from "lucide-react";

const traits = [
  { icon: Target, text: "Business-First Approach" },
  { icon: Bot, text: "AI Automation Specialist" },
  { icon: Code2, text: "Full-Stack Engineering" },
  { icon: Blocks, text: "CMS & Custom Solutions" },
  { icon: Rocket, text: "DevOps & Deployment" },
  { icon: Globe, text: "Remote Worldwide" },
];

const tags = [
  "AI Automation",
  "Business Strategy",
  "Product Thinking",
  "Clean Architecture",
  "Fast Delivery",
  "Scalable Systems",
  "CMS Expert",
  "DevOps",
  "SaaS Builder",
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="blob w-[450px] h-[450px] bg-purple top-0 right-[-120px]" />
      <div className="blob w-[300px] h-[300px] bg-cyan bottom-1/4 left-[-100px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionHeader
          badge="Who I Am"
          title="About"
          highlight="Me"
          subtitle="A business-minded technologist who turns complex problems into elegant, scalable solutions."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Profile Card */}
          <Reveal className="lg:col-span-2" direction="left">
            <div className="glass-card rounded-3xl p-8 text-center interactive-card">
              <div className="relative z-10">
                {/* Avatar */}
                <div className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan via-blue to-purple flex items-center justify-center glow-sm">
                  <span className="text-4xl font-black text-bg">MH</span>
                </div>

                <h3 className="text-xl font-bold mb-1">Mahmudul Hassan</h3>
                <p className="text-cyan text-sm font-semibold mb-6">
                  AI Automation Expert & Full-Stack Developer
                </p>

                {/* Trait list */}
                <div className="space-y-3 text-left">
                  {traits.map((t) => {
                    const Icon = t.icon;
                    return (
                      <div
                        key={t.text}
                        className="flex items-center gap-3 text-sm text-text-2"
                      >
                        <Icon className="w-4 h-4 text-cyan flex-shrink-0" />
                        <span>{t.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:glow-text transition-all duration-300 group"
                  >
                    Let&apos;s work together
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content Column */}
          <div className="lg:col-span-3 space-y-6">
            <Reveal delay={0.1}>
              <p className="text-text-2 text-base md:text-lg leading-relaxed">
                I&apos;m not just a developer — I&apos;m a{" "}
                <strong className="text-text">
                  business solution architect
                </strong>{" "}
                who understands that great technology must serve real business
                goals. I combine{" "}
                <strong className="text-cyan">
                  AI automation expertise
                </strong>{" "}
                with{" "}
                <strong className="text-text">
                  modern full-stack development
                </strong>{" "}
                to create systems that don&apos;t just work — they{" "}
                <em className="text-cyan">automate, scale, and convert</em>.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-text-2 text-base md:text-lg leading-relaxed">
                My approach is unique: I think like a{" "}
                <strong className="text-text">product builder</strong>, not just
                a coder. Every line of code I write, every automation I design,
                and every AI agent I create is engineered to drive measurable
                business outcomes — whether that&apos;s reducing manual work by
                80%, capturing more leads, or building a platform that serves
                thousands of users.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-text-2 text-base md:text-lg leading-relaxed">
                From{" "}
                <strong className="text-text">
                  AI-powered workflow automation
                </strong>{" "}
                and{" "}
                <strong className="text-text">
                  custom CMS implementations
                </strong>{" "}
                to{" "}
                <strong className="text-text">SaaS product development</strong>{" "}
                — I deliver premium, production-ready solutions that make a real
                impact.
              </p>
            </Reveal>

            {/* Tags */}
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-2 pt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-medium border border-border text-text-3 hover:border-cyan/30 hover:text-cyan transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
