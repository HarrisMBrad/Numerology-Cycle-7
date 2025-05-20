  // /phases/phase2.js 
    console.log("🟢 Phase 2: Planning initiated.");
    // Symbolic actions for Planning phase
const IntegrationLayer = require('./layers/integrationLayer');
const layer = new IntegrationLayer();

const result = layer.mergeResponses({
  ego: "I believe this is correct.",
  shadow: "But what if we’re wrong?",
  context: "Testing phase logic"
});
console.log(result);

    const phase2Log = {
      status: "active",
      phase: 2,
      log: "Planning phase executed. Strategic intent calibrated."
    };