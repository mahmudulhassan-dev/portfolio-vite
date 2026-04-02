import { type NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { supabase } from "@/lib/supabase";
import axios from "axios";
import { SYSTEM_PROMPT } from "@/lib/system-prompt";

export const dynamic = "force-dynamic";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");

// Telegram Config
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, conversationId, type = "text", mediaUrl = "" } = body;

    const lastMessage = messages[messages.length - 1]?.content || "";

    // 1. Save User Message to Supabase
    if (conversationId) {
      await supabase.from("messages").insert({
        conversation_id: conversationId,
        role: "user",
        content: lastMessage,
        type,
        media_url: mediaUrl
      });
    }

    // 2. Notify Mahmudul via Telegram (if configured)
    if (TELEGRAM_TOKEN && TELEGRAM_CHAT_ID && TELEGRAM_TOKEN !== "your_bot_token_here") {
      try {
        const text = `🚀 *New Portfolio Chat:* ${lastMessage}\n\n🔗 *Ref:* ${conversationId || 'Anonymous'}`;
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'Markdown'
        });
      } catch (e) {
        console.error("Telegram notification failed", e);
      }
    }

    // 3. Generate AI Response using Gemini Pro
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
        { role: "model", parts: [{ text: "Understood. I am now Mahmudul's AI Assistant. How can I help?" }] },
        ...messages.slice(0, -1).map((m: { role: string; content: string }) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }]
        }))
      ],
    });

    const result = await chat.sendMessage(lastMessage);
    const reply = result.response.text();

    // 4. Save AI Reply to Supabase
    if (conversationId) {
      await supabase.from("messages").insert({
        conversation_id: conversationId,
        role: "assistant",
        content: reply
      });
    }

    return Response.json({ reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return Response.json({ error: "Something went wrong in the AI core." }, { status: 500 });
  }
}
