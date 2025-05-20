// phases/phaseKernel.js
// Manages phaseCore logic runtime (1–9) + loopback (0)
// TODO: add startBrowserTracingNavigationSpan() or monitoring hooks as needed

const phase1 = require('./phases/phase1'); // Presence
const phase2 = require('./phases/phase2'); // Planning
const phase3 = require('./phases/phase3'); // Action
const phase4 = require('./phases/phase4'); // Reflection
const phase5 = require('./phases/phase5'); // Correction
const phase6 = require('./phases/phase6'); // Connection
const phase7 = require('./phases/phase7'); // Rest
const phase8 = require('./phases/phase8'); // Recalibration
const phase9 = require('./phases/phase9'); // Release + Restart
const phase0 = require('./phases/phase0'); // Optional: cycle reset or idle

const phaseMap = {
  0: phase0,
  1: phase1,
  2: phase2,
  3: phase3,
  4: phase4,
  5: phase5,
  6: phase6,
  7: phase7,
  8: phase8,
  9: phase9
};

module.exports = {
  init() {
    console.log("🔄 Phase Kernel loaded. Runtime ready.");
    this.runPhase(1); // You can update this number to start with any phase
  },

  runPhase(phaseNumber) {
    console.log(`🌀 Running Phase ${phaseNumber}`);
    const phaseModule = phaseMap[phaseNumber];

    if (phaseModule && typeof phaseModule.run === 'function') {
      const result = phaseModule.run();
      console.log(`✅ Phase ${phaseNumber} executed.`);
      console.log("📖 Log:", result);
      return result;
    } else {
      console.log("⚠️ Unknown or unconfigured phase number.");
      return undefined;
    }
  }

}


