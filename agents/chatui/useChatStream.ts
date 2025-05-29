// chatui/useChatStream.ts

import { useState } from 'react';
import type { Message } from './types';

export function useChatStream() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hello. I am Voro. What symbolic insight are you seeking today?' },
  ]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const userMsg: Message = { sender: 'user', text: userInput };
    setMessages((prev) => [...prev, userMsg]);

    // Simulate symbolic response with delay
    setTimeout(() => {
      const botResponse: Message = {
        sender: 'bot',
        text: generateBotReply(userInput),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);

    setUserInput('');
  };

  const handleUserInput = (value: string) => setUserInput(value);

  return {
    messages,
    userInput,
    sendMessage,
    handleUserInput,
  };
}

function generateBotReply(input: string): string {
  // Simple placeholder logic — replace with NLP or backend call
  const responses = [
    "That aligns with Phase 3: Emergence.",
    "You’re asking from within Cycle 7. Reflect deeper.",
    "Symbolic echo received. Continue your insight trace.",
    "That query touches the harmonic between logic and memory.",
  ];
