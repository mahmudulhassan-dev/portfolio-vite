interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function getChatReply(
  prompt: string, 
  history: ChatMessage[] = [],
  conversationId?: string,
  type: string = "text",
  mediaUrl?: string
) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [...history, { role: "user", content: prompt }],
        conversationId,
        type,
        mediaUrl
      }),
    });

    if (!response.ok) {
      throw new Error("Chat network response was not ok");
    }

    const data = await response.json();
    return data.reply as string;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm having a bit of trouble connecting to Mahmudul's systems right now. Could you please try again in a moment?";
  }
}
