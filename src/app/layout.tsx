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
  title: "Mahmudul Hassan — AI Automation Expert & Full-Stack Developer",
  description: "Mahmudul Hassan is an AI and full-stack engineering leader building intelligent, high-performance digital solutions and automated business ecosystems.",
  keywords: "AI Automation, Full-Stack Developer, AI Agents, Software Engineer, Mahmudul Hassan",
  authors: [{ name: "Mahmudul Hassan" }],
  openGraph: {
    title: "Mahmudul Hassan — AI Automation Expert & Full-Stack Developer",
    description: "Building intelligent digital ecosystems and high-performance applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmudul Hassan — AI Automation Expert & Full-Stack Developer",
    description: "Building intelligent digital ecosystems and high-performance applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
