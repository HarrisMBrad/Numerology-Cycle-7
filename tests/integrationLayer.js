const IntegrationLayer = require('./layers/integrationLayer');
const layer = new IntegrationLayer();

const result = layer.mergeResponses({
  ego: "I believe this is correct.",
  shadow: "But what if we’re wrong?",
  context: "Testing phase logic"
});
console.log(result);
