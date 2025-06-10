
> Powered by `useChatStream()`, all agent responses can be simulated, streamed, or connected to real models.

---

## 📁 File Structure

```bash
chatui/
├── hooks/
│   └── useChatStream.ts         # Manages chat state + bot logic
├── types/
│   └── types.ts                 # Chat message and session types
├── pages/
│   └── index.tsx                # Demo launchpad (Next.js)
├── components/
│   └── ChatWindow.tsx           # Chat UI (WIP)
├── utils/
│   └── memoryLayer.js           # Partial log memory for PhaseCore
├── public/                      # Assets (optional)
└── README.md                    # You're here
