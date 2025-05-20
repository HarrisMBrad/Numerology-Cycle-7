
// runtime/evaluateHarmony.js

// 🧠 evaluateHarmony — External evaluator for symbolic or linguistic harmony between ego + shadow layers

function evaluateHarmony(egoResponse, shadowInfluence) {
  // Normalize strings
  const clean = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const ego = clean(egoResponse);
  const shadow = clean(shadowInfluence);

  // Calculate character overlap score
  const overlap = [...new Set(ego)].filter(char => shadow.includes(char)).length;
  const maxLen = Math.max(ego.length, shadow.length) || 1;

  const score = parseFloat((overlap / maxLen).toFixed(2));

  return {
    score,
    summary: score >= 0.7
      ? "High alignment"
      : score >= 0.4
      ? "Moderate resonance"
      : "Dissonant — deeper reflection needed"
  };
}

module.exports = evaluateHarmony;
