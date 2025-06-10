// chatui/pages/index.tsx

import Head from 'next/head';
import ChatWindow from '../ChatWindow';

export default function Home() {
  return (
    <>
      <Head>
        <title>Voro Chat UI</title>
        <meta name="description" content="Symbolic Agent Interface – Numerology-Cycle-7 Chatbot" />
      </Head>
      <main className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Voro8 Chat Interface
        </h1>
        <ChatWindow />
      </main>
    </>
  );
}
