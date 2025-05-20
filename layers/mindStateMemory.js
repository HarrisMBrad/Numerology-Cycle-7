// layers/mindStateMemory.js
// 🧠 MindState Memory Layer — Stores symbolic interactions across runtime phases

class MindStateMemory {
  constructor() {
    this.entries = [];
  }

  record(entry) {
    const enriched = {
      ...entry,
      timestamp: new Date().toISOString()
    };
    this.entries.push(enriched);
    console.log("📝 MindState recorded:", enriched);
    return enriched;
  }

  getRecent(limit = 5) {
    return this.entries.slice(-limit);
  }

  findByPhase(phase) {
    return this.entries.filter(e => e.phase === phase);
  }

  findByDateRange({ yesterday, today, tomorrow }) {
    return this.entries.filter(e => [yesterday, today, tomorrow].includes(e.date));
  }

  exportLog() {
    return JSON.stringify(this.entries, null, 2);
  }
}

module.exports = MindStateMemory;
