// chatui/ChatWindow.tsx

import React, { useRef, useEffect } from 'react';
import { useChatStream } from './useChatStream';
import type { Message } from './types';

export const ChatWindow = () => {
  const { messages, userInput, handleUserInput, sendMessage } = useChatStream();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 h-96 overflow-y-scroll space-y-3">
        {messages.map((msg: Message, i: number) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === 'user'
                ? 'bg-blue-100 self-end ml-auto'
                : 'bg-gray-100 self-start mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="p-4 flex border-t"
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => handleUserInput(e.target.value)}
          placeholder="Ask Voro something..."
          className="flex-grow border rounded px-3 py-2 mr-2"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
