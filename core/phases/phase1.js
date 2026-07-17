const phase2 = require('./phase2');
const phase3 = require('./phase3');

module.exports = {
  run: () => {
    console.log("🟢 Phase 1: Presence initiated.");
    // Symbolic actions for Presence phase
    const phase1Log = {
      status: "active",
      phase: 1,
      log: "Presence phase executed. Identity anchored in present moment."
    };

    // Delegate to Phase 2 and Phase 3 instead of duplicating their logic inline
    const phase2Log = phase2.run();
    const phase3Log = phase3.run();

    return [phase1Log, phase2Log, phase3Log];
  }
};
  