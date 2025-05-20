// core/runAllPhases.js
const phaseKernel = require('./phaseKernel'); // Ensure this matches your file structure

console.log("🌀 INIT: Running all phases sequentially...\n");

for (let i = 0; i <= 9; i++) {
  const result = phaseKernel.runPhase(i);
  if (result && result.log) {
    console.log(`📘 Phase ${i} Log:\n${result.log}`);
  } else {
    console.log(`⚠️ Phase ${i} returned no result.`);
  }
  console.log("—".repeat(42));
}

console.log("✅ COMPLETE: All phases executed.\n");
