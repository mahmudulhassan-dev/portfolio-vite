import { SYSTEM_PROMPT, WELCOME_MESSAGE } from "./system-prompt";

export async function getChatReply(userMessage: string): Promise<string> {
  // Simulate AI processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const msg = userMessage.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! I'm Mahmudul's virtual assistant. How can I help you today?";
  }

  if (msg.includes("service") || msg.includes("offer")) {
    return "Mahmudul offers AI Automation Systems, Custom Web Development (React/Next.js), and AI Agent Engineering. Which one interests you?";
  }

  if (msg.includes("automation") || msg.includes("ai")) {
    return "He specializes in building intelligent business ecosystems using LLMs (OpenAI, Anthropic) and automation tools like n8n and Make.com.";
  }

  if (msg.includes("project") || msg.includes("work")) {
    return "You can see some of his work in the 'Projects' section of this site, including SaaS dashboards and AI customer support systems.";
  }

  if (msg.includes("contact") || msg.includes("hire") || msg.includes("email")) {
    return "You can reach Mahmudul via the contact form on this page or email him directly at hello@mahmudulhassan.dev.";
  }

  return "That's an interesting question! I recommend reaching out to Mahmudul directly through the contact form for a detailed discussion about your specific needs.";
}
