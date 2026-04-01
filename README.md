# Mahmudul Hassan — AI Automation Expert & Full-Stack Developer

A premium, high-performance portfolio website showcasing AI automation expertise, full-stack development, CMS solutions, and business-focused digital products.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=for-the-badge&logo=framer)

---

## ✨ Features

### Core
- **AI Chat Assistant** — Floating widget with business-aware responses, lead qualification, and service explanations
- **Premium Dark Theme** — Deep dark UI with cyan/blue glow accents and glassmorphism
- **Smooth Animations** — Framer Motion scroll reveals, typewriter effects, hover interactions
- **Fully Responsive** — Mobile-first design with accordion footer and mobile navigation
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML, proper heading hierarchy

### Sections
1. **Hero** — Animated typewriter, stats grid, dual CTAs
2. **About** — Profile card with traits, expertise tags
3. **Services** — 6 service cards with gradient accents
4. **AI Automation** — Business automation showcase with outcome metrics
5. **Tech Stack & CMS** — Skill bars + 6 CMS platform cards with "when to use" guidance
6. **Projects** — Portfolio with business impact metrics
7. **AI & Prompt Expertise** — AI agent architecture + development process timeline
8. **Contact** — Form + contact info cards + social links
9. **Footer** — CTA banner, 4-column layout, mobile accordion, social icons

### Design System
- Glassmorphism cards with hover glow effects
- Interactive cards with radial mouse-follow gradient
- Gradient border reveals on hover
- Custom scrollbar, noise texture, grid pattern overlays
- Lucide React icon system

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter + JetBrains Mono (via `next/font`) |
| Database | Supabase (prepared) |
| AI | OpenAI API (prepared) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI chat API endpoint
│   ├── globals.css               # Design system & utilities
│   ├── layout.tsx                # Root layout with fonts & metadata
│   └── page.tsx                  # Home page (all sections)
├── components/
│   ├── ui/
│   │   └── motion.tsx            # Reveal, ScaleReveal, SectionHeader
│   ├── Navbar.tsx                # Fixed navbar with mobile menu
│   ├── Hero.tsx                  # Hero with typewriter & stats
│   ├── About.tsx                 # About section
│   ├── Services.tsx              # Services grid
│   ├── Automation.tsx            # AI automation section
│   ├── TechCms.tsx               # Tech stack & CMS expertise
│   ├── Projects.tsx              # Portfolio projects
│   ├── AiExpertise.tsx           # AI & prompt engineering
│   ├── Contact.tsx               # Contact form & info
│   ├── Footer.tsx                # Premium footer
│   └── ChatWidget.tsx            # Floating AI chat
└── lib/
    ├── supabase.ts               # Supabase client config
    └── system-prompt.ts          # AI assistant system prompt
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mahmudulhassan-dev/mahmudulhassan-dev.git
cd mahmudulhassan-dev

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local with your keys

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | For DB features |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | For DB features |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | For server-side DB |
| `OPENAI_API_KEY` | OpenAI API key | For AI chat |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | Optional |

---

## ☁️ Deployment

### Vercel (Recommended)

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy — Vercel auto-detects Next.js

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🗄 Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Copy project URL and anon key to `.env.local`
3. Uncomment the Supabase client code in `src/lib/supabase.ts`
4. Install the Supabase client: `npm install @supabase/supabase-js`

---

## 🤖 AI Chat Setup

The chat widget works out of the box with built-in response logic. To enable OpenAI-powered responses:

1. Get an API key from [platform.openai.com](https://platform.openai.com)
2. Add `OPENAI_API_KEY` to `.env.local`
3. Install OpenAI SDK: `npm install openai`
4. Uncomment the OpenAI integration in `src/app/api/chat/route.ts`

---

## 📄 License

MIT © Mahmudul Hassan
