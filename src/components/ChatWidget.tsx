"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, User, Sparkles, Mic, Paperclip, Camera, Smile, Video, Image as ImageIcon, Square, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getChatReply } from "@/lib/chat-engine";
import EmojiPicker, { Theme, EmojiClickData } from "emoji-picker-react";
import { supabase } from "@/lib/supabase";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  type?: "text" | "voice" | "image" | "file" | "video";
  mediaUrl?: string;
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Advanced UI States
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Initialize Conversation & History
  useEffect(() => {
    const saved = localStorage.getItem("mh_chat_history");
    const savedConvId = localStorage.getItem("mh_conversation_id");
    
    if (savedConvId) {
      setConversationId(savedConvId);
    } else {
      const newId = crypto.randomUUID();
      localStorage.setItem("mh_conversation_id", newId);
      setConversationId(newId);
    }

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })));
      } catch (e) {}
    }
  }, []);

  // 2. Persist Messages & Scroll
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("mh_chat_history", JSON.stringify(messages));
    }
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 3. Core Message Handling
  const handleSend = async (e?: React.FormEvent, customMsg?: Partial<Message>) => {
    e?.preventDefault();
    if (!input.trim() && !customMsg && !isTyping) return;

    setShowEmojiPicker(false);
    
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: customMsg?.content || input,
      type: customMsg?.type || "text",
      mediaUrl: customMsg?.mediaUrl,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const history = messages.map(m => ({ role: m.role as "user" | "assistant", content: m.content }));
      
      const reply = await getChatReply(
        userMsg.content, 
        history, 
        conversationId || 'anonymous',
        userMsg.type,
        userMsg.mediaUrl
      );

      setMessages((prev) => [...prev, { 
        id: crypto.randomUUID(), 
        role: "assistant", 
        content: reply, 
        type: "text",
        timestamp: new Date()
      }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { 
          id: crypto.randomUUID(), 
          role: "assistant", 
          content: "I'm having a bit of trouble connecting to Mahmudul's systems right now.", 
          type: "text",
          timestamp: new Date()
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // 4. Supabase Media Upload Handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: Message["type"]) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      if (!supabase) {
        alert("Media upload is unavailable right now. Please send text instead.");
        return;
      }

      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `chat/${fileName}`;

      const { error } = await supabase.storage
        .from('chat-media')
        .upload(filePath, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('chat-media')
        .getPublicUrl(filePath);

      handleSend(undefined, {
        content: `Sent a ${type}`,
        type: type,
        mediaUrl: publicUrl
      });
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload media. Please try again.");
    }
  };

  // 5. Voice Recording Implementation
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });

        if (!supabase) {
          alert("Voice messages are unavailable right now. Please send text instead.");
          return;
        }

        const fileName = `voice-${crypto.randomUUID()}.webm`;
        const { error } = await supabase.storage
          .from('chat-media')
          .upload(`chat/${fileName}`, audioBlob);

        if (!error) {
          const { data: { publicUrl } } = supabase.storage
            .from('chat-media')
            .getPublicUrl(`chat/${fileName}`);

          handleSend(undefined, {
            content: "Sent a Voice Message",
            type: "voice",
            mediaUrl: publicUrl
          });
        }
        
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      timerIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
    } catch (err) {
      console.error("Microphone error:", err);
      alert("Microphone access is required for voice messages.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
  };

  const cancelRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Chat with AI"
            title="Chat with AI"
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-cyan via-blue to-purple text-bg flex items-center justify-center shadow-2xl shadow-cyan/20 hover:glow-md transition-all group overflow-hidden border border-white/10 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 pointer-events-none" />
            <MessageSquare className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-green rounded-full border-2 border-bg shadow-[0_0_10px_rgba(0,255,0,0.8)] animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-[100] sm:inset-auto sm:bottom-28 sm:right-6 w-full h-full sm:w-[420px] sm:h-[700px] bg-bg/95 sm:bg-bg/90 backdrop-blur-3xl sm:border border-white/10 shadow-[0_0_40px_rgba(0,192,255,0.15)] rounded-none sm:rounded-[2rem] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-b from-surface/80 to-transparent border-b border-white/5 flex items-center justify-between shadow-sm relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan/10 blur-[50px] rounded-full pointer-events-none" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-gradient-to-br from-cyan to-blue p-[1px] shadow-lg shadow-cyan/20">
                   <div className="w-full h-full bg-surface-2 rounded-[15px] flex items-center justify-center overflow-hidden relative group">
                     <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     <Bot className="w-6 h-6 text-cyan drop-shadow-md group-hover:scale-110 transition-transform" />
                   </div>
                </div>
                <div>
                  <h3 className="font-black text-base text-text tracking-tight flex items-center gap-2">
                    M-AI Live Agent
                    <Sparkles className="w-3.5 h-3.5 text-cyan" />
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green animate-pulse shadow-[0_0_8px_rgba(0,255,0,0.6)]" />
                    <span className="text-[10px] text-text-3 uppercase font-bold tracking-widest">Telegram Synced • Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                title="Close Chat"
                className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-4 hover:text-cyan transition-all border border-white/5 relative z-10 active:scale-90 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-6 custom-scrollbar scroll-smooth relative">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center mb-5 border border-white/5 glow-md"
                  >
                    <Bot className="w-10 h-10 text-cyan drop-shadow-lg" />
                  </motion.div>
                  <h4 className="font-black text-xl mb-3">Hello! 👋</h4>
                  <p className="text-sm text-text-3 leading-relaxed max-w-[250px] font-medium">
                    I'm Mahmudul's Live AI Agent. Send a Voice SMS, attach a file, or type anything! Your messages are instantly synced to his Telegram.
                  </p>
                  <div className="mt-8 flex flex-col gap-2.5 w-full max-w-[280px]">
                    {[
                      "I have a business inquiry",
                      "Can you build a Telegram Bot for me?",
                      "What are your premium services?",
                    ].map((q, i) => (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        key={q}
                        onClick={() => { setInput(q); setTimeout(() => handleSend(), 50); }}
                        className="text-left px-5 py-3 rounded-2xl bg-surface-2 border border-white/5 text-xs font-semibold text-text-2 hover:border-cyan/30 hover:bg-cyan/5 hover:text-cyan hover:glow-xs transition-all shadow-sm"
                      >
                        {q}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    key={msg.id}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[85%] flex gap-3 sm:gap-4 flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                      <div className={`flex gap-3 sm:gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-md ${
                          msg.role === "user" ? "bg-gradient-to-br from-cyan/20 to-blue/20" : "bg-gradient-to-br from-surface to-surface-2 border border-white/10"
                        }`}>
                          {msg.role === "user" ? <User className="w-4 h-4 sm:w-5 sm:h-5 text-cyan" /> : <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-cyan" />}
                        </div>
                        <div className={`p-4 rounded-3xl text-sm leading-relaxed shadow-lg flex flex-col gap-2 ${
                            msg.role === "user"
                              ? "bg-gradient-to-br from-cyan to-blue text-bg font-bold rounded-tr-sm"
                              : "bg-surface-2 border border-white/5 text-text-2 font-medium rounded-tl-sm"
                          }`}
                        >
                          {msg.type === "image" && msg.mediaUrl && (
                            <img src={msg.mediaUrl} alt="Attached" className="max-w-[200px] rounded-xl object-cover shadow-sm bg-black/20" />
                          )}
                          {msg.type === "voice" && msg.mediaUrl && (
                            <audio controls src={msg.mediaUrl} className="w-[200px] sm:w-[240px] h-[40px] rounded-full custom-audio" />
                          )}
                          {msg.type === "video" && msg.mediaUrl && (
                            <video controls src={msg.mediaUrl} className="max-w-[200px] rounded-xl shadow-sm bg-black/20" />
                          )}
                          {msg.type === "file" && msg.mediaUrl && (
                            <a href={msg.mediaUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 bg-black/10 rounded-xl hover:bg-black/20 transition-colors">
                              <Paperclip className="w-4 h-4" /> <span className="text-xs truncate max-w-[150px]">Attached Document</span>
                            </a>
                          )}
                          {msg.content && <span>{msg.content}</span>}
                        </div>
                      </div>
                      <span className="text-[10px] text-text-4 px-14">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {msg.role === "user" ? "Sent" : "AI Replied"}
                      </span>
                    </div>
                  </motion.div>
                ))
              )}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-surface-2 border border-white/5 p-4 rounded-3xl rounded-tl-sm flex gap-1.5 items-center shadow-lg">
                    <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce shadow-[0_0_5px_rgba(0,255,255,0.8)]" />
                    <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce [animation-delay:0.2s] shadow-[0_0_5px_rgba(0,255,255,0.8)]" />
                    <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce [animation-delay:0.4s] shadow-[0_0_5px_rgba(0,255,255,0.8)]" />
                  </div>
                </div>
              )}
            </div>

            {/* Emoji Picker Overlay */}
            {showEmojiPicker && (
              <div className="absolute bottom-[140px] right-4 z-20 shadow-2xl">
                <EmojiPicker 
                  theme={Theme.DARK} 
                  onEmojiClick={(e: EmojiClickData) => setInput(prev => prev + e.emoji)}
                  width={300}
                  height={350}
                />
              </div>
            )}

            {/* Hidden Native File Inputs */}
            <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => handleFileUpload(e, "file")} />
            <input type="file" accept="image/*" ref={imageInputRef} className="hidden" onChange={(e) => handleFileUpload(e, "image")} />
            <input type="file" accept="video/*" ref={videoInputRef} className="hidden" capture="environment" onChange={(e) => handleFileUpload(e, "video")} />
            <input type="file" accept="image/*" ref={cameraInputRef} className="hidden" capture="environment" onChange={(e) => handleFileUpload(e, "image")} />

            {/* Recording Active Banner */}
            {isRecording && (
               <div className="absolute bottom-[140px] inset-x-4 bg-red/10 border border-red/20 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between z-20 shadow-[0_0_30px_rgba(255,0,0,0.15)] animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red animate-ping" />
                    <span className="text-red font-bold text-sm tracking-widest">{formatTime(recordingTime)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={cancelRecording} className="p-2 rounded-xl bg-red/10 text-red hover:bg-red hover:text-white transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button onClick={stopRecording} className="p-2 px-4 rounded-xl bg-red text-white font-bold text-xs hover:bg-red/80 transition-colors uppercase tracking-widest flex shadow-md gap-2 items-center">
                      <Square className="w-3 h-3 fill-white" />
                      Send Voice
                    </button>
                  </div>
               </div>
            )}

            {/* Rich Inputs Action Bar */}
            <div className="px-5 py-3 bg-surface border-t border-white/5 flex items-center gap-1 overflow-x-auto no-scrollbar relative z-10">
               <button onClick={() => fileInputRef.current?.click()} title="Attach File" type="button" className="p-2.5 rounded-xl text-text-4 hover:text-cyan hover:bg-cyan/10 transition-colors flex-shrink-0">
                 <Paperclip className="w-5 h-5" />
               </button>
               <button onClick={() => imageInputRef.current?.click()} title="Image" type="button" className="p-2.5 rounded-xl text-text-4 hover:text-purple hover:bg-purple/10 transition-colors flex-shrink-0">
                 <ImageIcon className="w-5 h-5" />
               </button>
               <button onClick={() => cameraInputRef.current?.click()} title="Camera" type="button" className="p-2.5 rounded-xl text-text-4 hover:text-blue hover:bg-blue/10 transition-colors flex-shrink-0">
                 <Camera className="w-5 h-5" />
               </button>
               <button onClick={() => videoInputRef.current?.click()} title="Video" type="button" className="p-2.5 rounded-xl text-text-4 hover:text-green hover:bg-green/10 transition-colors flex-shrink-0">
                 <Video className="w-5 h-5" />
               </button>
               <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} title="Emoji" type="button" className={`p-2.5 rounded-xl transition-colors flex-shrink-0 ${showEmojiPicker ? 'text-yellow-400 bg-yellow-400/10' : 'text-text-4 hover:text-yellow-400 hover:bg-yellow-400/10'}`}>
                 <Smile className="w-5 h-5" />
               </button>
               <div className="flex-1" />
               <button 
                 onClick={isRecording ? stopRecording : startRecording}
                 title="Voice Message" 
                 type="button" 
                 className={`p-3 rounded-full transition-colors flex-shrink-0 group relative overflow-hidden active:scale-95 ${
                   isRecording 
                    ? "bg-red text-white shadow-[0_0_20px_rgba(255,0,0,0.4)]" 
                    : "bg-cyan/10 text-cyan hover:bg-cyan hover:text-bg shadow-[0_0_15px_rgba(0,192,255,0.15)]"
                 }`}
               >
                 {isRecording ? <Square className="w-5 h-5 relative z-10 fill-white" /> : <Mic className="w-5 h-5 relative z-10" />}
               </button>
            </div>

            {/* Input Form */}
            <form onSubmit={(e) => handleSend(e)} className="px-5 pb-5 bg-surface flex items-end gap-3 relative z-10">
              <div className="relative flex-1 bg-surface-2 border border-border-2 focus-within:border-cyan/50 focus-within:shadow-[0_0_15px_rgba(0,192,255,0.1)] rounded-[1.5rem] transition-all">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => setShowEmojiPicker(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask me anything in any language..."
                  className="w-full bg-transparent px-5 py-4 text-sm outline-none transition-all resize-none min-h-[52px] max-h-[120px] custom-scrollbar text-text placeholder:text-text-4"
                  rows={1}
                />
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-14 h-[52px] flex-shrink-0 rounded-[1.5rem] bg-gradient-to-br from-cyan to-blue text-bg flex items-center justify-center disabled:opacity-50 disabled:grayscale transition-all shadow-xl shadow-cyan/20 hover:scale-105 active:scale-95"
              >
                <Send className="w-5 h-5 ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
