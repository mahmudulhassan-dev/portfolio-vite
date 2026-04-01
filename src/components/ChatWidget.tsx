"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getChatReply } from "@/lib/chat-engine";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const reply = await getChatReply(input);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm having a bit of trouble connecting. Please try again later!" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan to-blue text-bg flex items-center justify-center shadow-2xl hover:glow-md transition-all group"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red rounded-full border-2 border-bg animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-[60] w-[calc(100%-3rem)] sm:w-[400px] h-[550px] bg-bg/95 backdrop-blur-xl border border-border-2 shadow-2xl rounded-3xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 bg-surface-2 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                    <span className="text-[10px] text-text-4 uppercase font-bold tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-text-4 hover:text-text transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 p-5 overflow-y-auto space-y-5 custom-scrollbar"
            >
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan/5 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-cyan/50" />
                  </div>
                  <h4 className="font-bold mb-2">Hello! 👋</h4>
                  <p className="text-xs text-text-3 leading-relaxed">
                    I'm Mahmudul's AI Assistant. Ask me anything about his expertise, projects, or how he can help your business.
                  </p>
                  <div className="mt-6 grid grid-cols-1 gap-2 w-full">
                    {[
                      "What are your main services?",
                      "Tell me about AI Automation",
                      "How can I work with you?",
                    ].map((q) => (
                      <button
                        key={q}
                        onClick={() => {
                          setInput(q);
                          setTimeout(() => handleSend(), 50);
                        }}
                        className="text-left px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-[11px] hover:border-cyan/30 hover:bg-cyan/5 transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] flex gap-3 ${
                        msg.role === "user" ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${
                          msg.role === "user" ? "bg-cyan/10" : "bg-surface-2 border border-border"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <User className="w-4 h-4 text-cyan" />
                        ) : (
                          <Bot className="w-4 h-4 text-cyan" />
                        )}
                      </div>
                      <div
                        className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                          msg.role === "user"
                            ? "bg-gradient-to-br from-cyan to-blue text-bg font-medium"
                            : "bg-surface-2 border border-border text-text-2"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  </div>
                ))
              )}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-surface-2 border border-border p-3 rounded-2xl flex gap-1 items-center">
                    <span className="w-1 h-1 bg-cyan rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-cyan rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-1 bg-cyan rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-surface-2 border-t border-border flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-bg/50 border border-border focus:border-cyan/50 rounded-xl px-4 py-2.5 text-xs outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan to-blue text-bg flex items-center justify-center disabled:opacity-50 disabled:grayscale transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
