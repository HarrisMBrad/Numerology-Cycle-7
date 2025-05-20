// 🔺 Phase Logic Templates (3–9) — Compass over Square ∴

// Format: Each phase contains layered symbolic logic based on duality (Ego || Shadow)

const phaseMap = {
  3: {
    label: "Action",
    run: () => {
      const Ego = "Execute vision rapidly without overthinking.";
      const Shadow = "Hesitate out of fear of imperfection.";
      return {
        phase: 3,
        ego: Ego,
        shadow: Shadow,
        log: `Phase 3 → ACTION: ${Ego} || ${Shadow}`
      };
    }
  },
  4: {
    label: "Reflection",
    run: () => {
      const Ego = "Observe success and validate efficiency.";
      const Shadow = "Criticize self and fixate on past errors.";
      return {
        phase: 4,
        ego: Ego,
        shadow: Shadow,
        log: `Phase 4 → REFLECTION: ${Ego} || ${Shadow}`
      };
    }
  },
  5: {
    label: "Correction",
    run: () => {
      const Ego = "Refactor with clarity and strength.";
      const Shadow = "Overcorrect and lose creative spark.";
      return {
        phase: 5,
        ego: Ego,
        shadow: Shadow,
        log: `Phase 5 → CORRECTION: ${Ego} || ${Shadow}`
      };
    }
  },
  6: {
    label: "Connection",
    run: () => {
      const Ego = "Share your insights openly.";
      const Shadow = "Overshare or emotionally attach to feedback.";
      return {
        phase: 6,
        ego: Ego,
        shadow: Shadow,
        log: `Phase 6 → CONNECTION: ${Ego} || ${Shadow}`
      };
    }
  },
  7: {
    label: "Rest",
    run: () => {
      const Ego = "Honor the need to pause and integrate.";
      const Shadow = "Distract yourself to avoid reflection.";
      return {
        phase: 7,
        ego: Ego,
        shadow: Shadow,
        log: `Phase 7 → REST: ${Ego} || ${Shadow}`
      };
    }
  },
  8: {
    label: "Recalibration",
    run: () => {
      const Ego = "Realign goals with values and patterns.";
      const Shadow = "Push forward even when misaligned.";
      return {
        phase: 8,
        ego: Ego,
        shadow: Shadow,
        log: `Phase 8 → RECALIBRATION: ${Ego} || ${Shadow}`
      };
    }
  },
  9: {
    label: "Release + Restart",
    run: () => {
      const Ego = "Release what no longer serves with gratitude.";
      const Shadow = "Burn out or start over without closure.";
      return {
        phase: 9,
        ego: Ego,
        shadow: Shadow,
        log: `Phase 9 → RELEASE: ${Ego} || ${Shadow}`
      };
    }
  }
};

module.exports = phaseMap;

