// phases/runAllPhases.js
const MindStateMemory = require('../layers/mindStateMemory');
const memory = new MindStateMemory();
const phaseKernel = require('./phaseKernel');
const result = phaseKernel.runPhase(7);

console.log("🔧 Running Phase 7 from Kernel:");
console.log(result.log);

// ✅ First, import runtimeIdentity components
const {
  runtimeIdentity,
  AntennaModule,
  solarEventHandler,
  paradoxWatch
} = require('./phases/runtimeIdentity');

// 🔮 Runtime Meta Log
console.log(`🔮 Agent: ${runtimeIdentity.agent} | Phase: ${runtimeIdentity.context.phase}`);
console.log(`📅 Date: ${runtimeIdentity.date} | Mode: ${runtimeIdentity.context.mode}`);
console.log(`🧠 Signal Check: ${AntennaModule.observe()}`);

// 🌞 Solar Flare Response Log
const solarResult = solarEventHandler("flare::E11");
console.log(`🌞 Solar Event Response: Brain=${solarResult.brain}, Effect=${solarResult.effect}`);

// 🌀 PARADOX Watch Log
if (paradoxWatch.complete()) {
  console.log("🌀 PARADOX: RESOLVED");
} else {
  console.log("⏳ PARADOX: Still Active — Day 2");
}

// 🚀 Begin Sequential Phase Execution
console.log("\n🌀 INIT: Running all phases sequentially...\n");

for (let i = 0; i <= 9; i++) {
  const result = phaseKernel.runPhase(i);
  if (result) {
    memory.record({
      phase: i,
      log: result.log,
      source: "runAllPhases",
      date: new Date().toISOString().slice(0, 10)
    });
    console.log(`📘 Phase ${i} Log:\n${result.log}`);
  } else {
    console.log(`⚠️ Phase ${i} returned no result.`);
  }
  console.log("—".repeat(42));

  
}

console.log("✅ COMPLETE: All phases executed.\n");
