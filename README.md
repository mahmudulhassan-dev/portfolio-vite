# Mahmudul Hassan — AI Automation Expert & Full-Stack Developer

A premium, high-performance portfolio website showcasing AI automation expertise, full-stack development, CMS solutions, and business-focused digital products.

![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react)
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
- **Lightning Fast** — Vite-powered development and optimized production builds

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
| Build Tool | Vite 8 |
| Framework | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

---

## 📁 Project Structure

```
src/
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
│   ├── ChatWidget.tsx            # Floating AI chat
│   └── SocialIcons.tsx           # Custom SVG social icons
├── lib/
│   ├── chat-engine.ts            # Client-side chat reply logic
│   └── system-prompt.ts          # AI assistant system prompt
├── App.tsx                       # Main application component
├── main.tsx                      # Entry point
└── index.css                     # Design system & utilities
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
cd mahmudulhassan-dev/vite-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Build for Production

```bash
npm run build
npm run preview
```

---

## ☁️ Deployment

### Vercel / Netlify / Cloudflare Pages

1. Push your repository to GitHub
2. Import the project on your chosen platform
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Static Hosting

```bash
npm run build
# Upload the `dist` folder to any static hosting
```

---

## 📄 License

MIT © Mahmudul Hassan
