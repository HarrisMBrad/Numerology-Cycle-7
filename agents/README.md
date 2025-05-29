# 🧠 chatui – Voro8 Symbolic Chat Interface

**Created:** May 29, 2025  
**Context:** Numerology-Cycle-7 → Reflective Phase  
**Role:** Frontend proof-of-capability for symbolic agent conversation

---

## 📌 Purpose

This module provides a self-contained, real-time chat interface using:

- **React + Next.js + TypeScript**
- **Tailwind CSS** for styling
- **Custom hook (`useChatStream`)** to manage state, simulate responses, or connect to NLP backend (NLTK/Python)

It serves as both a:
- **Symbolic dialogue UI** for Voro8 (or any reflective agent)
- **Technical proof** for Upwork proposals, demos, or integration with TITAN runtime

---

## 🛠 Files Overview

| File | Purpose |
|------|---------|
| `ChatWindow.tsx` | Renders the chat layout + input form |
| `useChatStream.ts` | Manages message state + simulates bot responses |
| `types.ts` | Type declarations for `Message` structure |
| `pages/index.tsx` | Next.js test entrypoint |
| `README.md` | You’re reading it. |

---

## 🧪 Testing

Run in isolation with:

```bash
cd chatui
npx next dev
```
