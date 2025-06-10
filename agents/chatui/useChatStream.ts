// File: hooks/useChatStream.ts
// Purpose: Manage symbolic chat flow with initial bot context and test-ready utilities
// Author: brforeal.dev@gmail.com
// Context: Numerology-Cycle-7 (Reflection)

import { useState } from 'react';
import { Message } from '../types';

export function useChatStream() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: '🧠 Welcome. I am Voro — a symbolic agent. What pattern are we decoding today?',
      timestamp: new Date().toISOString(),
    },
    {
      sender: 'user',
      text: 'I’m exploring Numerology Cycle 7. What should I focus on?',
      timestamp: new Date().toISOString(),
    },
    {
      sender: 'bot',
      text: 'Cycle 7 relates to truth-seeking, pattern deconstruction, and internal debugging.',
      timestamp: new Date().toISOString(),
    },
    {
      sender: 'user',
      text: 'What does internal debugging mean here?',
      timestamp: new Date().toISOString(),
    },
    {
      sender: 'bot',
      text: 'It means identifying where your thoughts or systems don’t match your intentions. Shall we look at your runtime logs?',
      timestamp: new Date().toISOString(),
    },
  ]);

  // Simulate bot response with slight delay
  const sendMessage = (text: string) => {
    const userMessage: Message = {
      sender: 'user',
      text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        sender: 'bot',
        text: generateBotReply(text),
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800); // Simulated delay (800ms)
  };
}
  // Simple NLP-like symbolic stub
  const generateBotReply = (input: string): string => {
    const normalized = input.toLowerCase();

    if (normalized.includes('log')) return '🗂️ Accessing runtime logs... syncing symbolic memory layer.';
    if (normalized.includes('debug')) return '🔍 Debug Tip: Look for emotional dissonance as a system misalignment.';
    if (normalized.includes('numerology') && normalized.includes('7')) return '📊 Numerology 7 is about reflection and spiritual analysis. Pattern awareness is key.';
    if (normalized.includes('next')) return '🧭 Shall we explore PhaseCore 8: Strategy or PhaseCore 9: Completion?';

    return '🔁 Let’s keep exploring. You can ask about cycles, symbolic roles, or runtime alignment.';
  };

  return {
    messages,
    sendMessage,
  };
}
