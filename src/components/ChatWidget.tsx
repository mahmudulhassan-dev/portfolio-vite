import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Sparkles,
} from "lucide-react";
import { WELCOME_MESSAGE } from "@/lib/system-prompt";
import { generateReply } from "@/lib/chat-engine";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const quickActions = [
  "AI Automation",
  "Services",
  "CMS Platforms",
  "Contact",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "welcome", role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setNotify(true);
    }, 4000);
    return () => clearTimeout(t);
  }, [open]);

  const sendMessage = (content: string) => {
    if (!content.trim() || loading) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
    };
    setMessages((p) => [...p, userMsg]);
    setInput("");
    setLoading(true);

    // Use client-side reply generation (no API needed)
    setTimeout(() => {
      const reply = generateReply(content.trim().toLowerCase());
      setMessages((p) => [
        ...p,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: reply,
        },
      ]);
      setLoading(false);
    }, 600);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleQuickAction = (q: string) => {
    sendMessage(q);
  };

  const renderContent = (content: string) =>
    content.split("\n").map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((p, j) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={j} className="text-text font-semibold">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={j}>{p}</span>
        )
      );
      return (
        <span key={i}>
          {i > 0 && <br />}
          {parts}
        </span>
      );
    });

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-[400px]"
          >
            <div className="glass-strong rounded-3xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col max-h-[550px]">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-cyan/10 via-blue/10 to-purple/10 px-5 py-4 flex items-center justify-between border-b border-border flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-transparent pointer-events-none" />
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center glow-xs">
                    <Bot className="w-5 h-5 text-bg" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text flex items-center gap-1.5">
                      AI Assistant
                      <Sparkles className="w-3 h-3 text-cyan" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                      <span className="text-[10px] text-text-4">
                        Online • Responds instantly
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="relative w-8 h-8 rounded-lg hover:bg-surface-3 flex items-center justify-center text-text-4 hover:text-text transition-all"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-cyan to-blue text-bg rounded-br-lg"
                          : "bg-surface-2 text-text-2 border border-border rounded-bl-lg"
                      }`}
                    >
                      {renderContent(m.content)}
                    </div>
                  </motion.div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-surface-2 border border-border rounded-2xl rounded-bl-lg px-4 py-3 flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full bg-cyan/50 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-cyan/50 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-cyan/50 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>

              {/* Quick Actions */}
              {messages.length <= 1 && (
                <div className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
                  {quickActions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleQuickAction(q)}
                      className="px-3 py-1.5 rounded-xl text-[11px] font-medium border border-border text-text-3 hover:border-cyan/30 hover:text-cyan transition-all duration-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="p-3 border-t border-border flex-shrink-0">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKey}
                    placeholder="Ask about AI automation, websites, CMS..."
                    disabled={loading}
                    className="flex-1 bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-text-4 focus:outline-none focus:border-cyan/40 transition-all"
                    id="chat-input"
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    disabled={loading || !input.trim()}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-blue flex items-center justify-center text-bg hover:glow-xs transition-all disabled:opacity-30 flex-shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        onClick={() => {
          setOpen(!open);
          setNotify(false);
        }}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center text-bg shadow-xl shadow-cyan/20 hover:glow-md hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="AI Chat Assistant"
        id="chat-fab"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <MessageSquare className="w-5 h-5" />
            {notify && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-pink animate-pulse border-2 border-bg" />
            )}
          </>
        )}
      </motion.button>
    </>
  );
}
