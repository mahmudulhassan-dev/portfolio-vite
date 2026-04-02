import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahmudulhassan.dev"),
  title: "Mahmudul Hassan — AI Automation Agency & Full-Stack Developer",
  description: "Mahmudul Hassan is a world-class AI automation expert and full-stack engineer building intelligent business ecosystems, custom LLM agents, and high-performance Next.js applications.",
  keywords: [
    "AI Automation Agency",
    "Full-Stack Developer",
    "AI Workflow Automation",
    "Custom AI Agent Developer",
    "Make.com Automation Expert",
    "n8n Workflow Engineering",
    "Next.js Full-Stack Solutions",
    "SaaS MVP Development",
    "Intelligent Chatbot Integration",
    "Mahmudul Hassan",
    "AI Business Solutions"
  ],
  authors: [{ name: "Mahmudul Hassan" }],
  openGraph: {
    title: "Mahmudul Hassan — AI Automation Agency & Full-Stack Developer",
    description: "Engineering intelligent digital ecosystems and high-performance applications that scale business growth.",
    type: "website",
    locale: "en_US",
    url: "https://mahmudulhassan.dev",
    siteName: "Mahmudul Hassan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmudul Hassan — AI Automation Agency & Full-Stack Developer",
    description: "Scale your business with custom AI automation and elite full-stack engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mahmudul Hassan — AI Automation & Full-Stack Development",
    "image": "https://mahmudulhassan.dev/mahmudul.jpg",
    "description": "Premium AI automation services and full-stack web development specializing in Next.js and intelligent digital ecosystems.",
    "url": "https://mahmudulhassan.dev",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Global",
      "addressCountry": "BD"
    },
    "sameAs": [
      "https://github.com/MahmudulHassan-dev",
      "https://linkedin.com/in/mahmudulhassan-dev"
    ],
    "serviceType": ["AI Automation", "Full-Stack Development", "Business Process Optimization"],
    "provider": {
      "@type": "Person",
      "name": "Mahmudul Hassan",
      "jobTitle": "AI Automation Engineer",
      "knowsAbout": ["Artificial Intelligence", "Next.js", "TypeScript", "Process Automation"]
    }
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
