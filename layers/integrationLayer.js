// layers/integrationLayer.js

// 🧩 Integration Layer — Connects outputs from ego, shadow, and context into unified symbolic decision

class IntegrationLayer {
  constructor() {
    this.lastHarmonyScore = null;
  }

  evaluateHarmony(egoResponse, shadowInfluence) {
    // Example: calculate basic similarity score
    const combined = egoResponse + shadowInfluence;
    const score = this._simpleHash(combined) % 100 / 100;
    this.lastHarmonyScore = parseFloat(score.toFixed(2));
    return this.lastHarmonyScore;
  }

  mergeResponses({ ego, shadow, context }) {
    return {
      mergedInsight: `${context} → (${ego} + ${shadow})`,
      harmony: this.evaluateHarmony(ego, shadow),
      timestamp: new Date().toISOString()
    };
  }

  _simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i) * (i + 1);
    }
    return hash;
  }
}

module.exports = IntegrationLayer;
