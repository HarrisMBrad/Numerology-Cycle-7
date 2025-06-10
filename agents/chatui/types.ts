// chatui/types.ts

// File: chatui/types.ts
// Purpose: Define core types for symbolic chat interface
// Author: brforeal.dev@gmail.com
// Context: Numerology-Cycle-7 → Reflection

export type Sender = 'user' | 'bot' | 'system' | 'agent';

export interface Message {
  id?: string; // Optional unique ID
  sender: Sender;
  text: string;
  timestamp: string;
  phaseTag?: string;         // Optional symbolic tag like "PhaseCore-7"
  memoryRef?: string;        // Reference to memoryLayer or external log
  mood?: 'neutral' | 'curious' | 'reflective' | 'alert' | 'inspired'; // Emotional tone (optional)
  isEphemeral?: boolean;     // For system-only temporary prompts
  stream?: boolean;          // Enable streaming UI effect (e.g., typewriter-style)
  meta?: Record<string, any>; // Additional metadata (e.g., source, tag weight, score)
}

// For enhanced runtime tracking/logging
export interface ChatSession {
  id: string;
  messages: Message[];
  startedAt: string;
  phaseCore?: string;
  numerology?: number;
  summary?: string;
  tags?: string[];
}

// Optional hook/action types
export interface SendMessagePayload {
  text: string;
  sender?: Sender;
  phaseTag?: string;
  memoryRef?: string;
}
