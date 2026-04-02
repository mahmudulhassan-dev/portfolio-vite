# Mahmudul Hassan — AI Automation Ecosystems & Full-Stack Engineering

A high-performance, secure, and AI-driven portfolio architecture designed for scalability, intelligence, and premium user experience. Built with a focus on business automation and state-of-the-art web technology.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)
![AI Engine](https://img.shields.io/badge/Gemini_2.5_Pro-Google_AI-4285F4?style=for-the-badge&logo=google-gemini)
![Database](https://img.shields.io/badge/Supabase-DB_%26_RLS-3ECF8E?style=for-the-badge&logo=supabase)
![Security](https://img.shields.io/badge/Security-Proxy_%26_Rate_Limit-red?style=for-the-badge&logo=shieldcheck)

---

## ✨ Premium Features

### 🤖 Intelligent AI Assistant
- **Engine**: Powered by **Google Gemini 2.5 Pro** ("Thinking" Reasoning Model).
- **Capabilities**: Conversational intelligence, context-aware service expertise, and automated lead capture.
- **Backend**: Real-time message storage in Supabase with anonymous/authenticated session tracking.

### 🛡️ Enterprise-Grade Security
- **API Protection**: Custom **Proxy Layer** with IP-based rate limiting (10 requests/min/IP) to prevent spam and cost overflows.
- **Database Security**: Row Level Security (RLS) policies implemented on all tables (`messages`, `conversations`, `contact_inquiries`).
- **Storage Protection**: Secure file/media upload policies for chat attachments (`chat-media` bucket).

### 🚀 Real-time Ecosystem
- **Admin Alerts**: Instant notifications via **Telegram Bot API** for every new lead or chat inquiry.
- **Data Persistence**: Full conversation history saved across browser sessions via local storage and Supabase sync.
- **Automated Workflow**: Contact forms automatically trigger telegram alerts and database entries.

### 💎 High-Performance UI
- **Turbopack Optimized**: Built on Next.js 16 with the faster compilation engine.
- **Motion Design**: Framer Motion 12+ for scroll-reveal sections, typewriter effects, and 3D glassmorphic cards.
- **Hydration Safe**: Solved React SSR/Client mismatches for a zero-error production build.

---

## 🛠 Tech Stack

| Layer | Technology | Status |
|-------|-----------|--------|
| **Framework** | Next.js 16 (App Router + Turbopack) | ✅ Implemented |
| **AI Core** | Google AI SDK (Gemini 2.5 Pro) | ✅ Implemented |
| **Database** | Supabase (Postgres + Realtime) | ✅ Implemented |
| **Security** | Proxy-based Rate Limiting + RLS | ✅ Implemented |
| **Real-time** | Telegram Bot API | ✅ Implemented |
| **Styling** | Tailwind CSS 4 | ✅ Implemented |
| **Animations** | Framer Motion + Particles.js | ✅ Implemented |

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+
- Supabase Project (Postgres + Storage)
- Google AI API Key (Gemini)
- Telegram Bot API Key (for alerts)

### 2. Environment Setup
Create a `.env.local` file with the following mapping:
```bash
# Google AI Intelligence
GOOGLE_GEMINI_API_KEY=your_gemini_pro_key

# Supabase (Real-time DB & Auth)
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Admin Alerts (Telegram)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

### 3. Installation
```bash
# Clone
git clone https://github.com/mahmudulhassan-dev/portfolio-nextjs.git
cd portfolio-nextjs

# Install
npm install

# Build & Run (Dev)
npm run dev
```

---

## 🗄 Database Architecture
The system uses three primary tables in Supabase:
- `conversations`: Tracks unique chat sessions and user metadata.
- `messages`: Stores chat history (role, content, media_url, conversation_id).
- `contact_inquiries`: Stores direct leads from the contact form.

---

## 📄 License
MIT © [Mahmudul Hassan](https://mahmudulhassan.dev)
