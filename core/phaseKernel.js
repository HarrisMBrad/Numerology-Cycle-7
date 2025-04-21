const phase1 = require('./phases/phase1');

module.exports = {
  init() {
    console.log("🔄 Phase Kernel loaded. Runtime ready.");
    this.runPhase(1);
  },
  runPhase(phaseNumber) {
    console.log(`🌀 Running Phase ${phaseNumber}`);
    let result;
    switch (phaseNumber) {
      case 1:
        result = phase1.run();
        console.log("🟢 Phase 1: Presence initiated.");
        console.log("📖 Log:", result);
        return result;
      default:
        console.log("⚠️ Unknown phase number.");
        return undefined;
    }
  }
};

