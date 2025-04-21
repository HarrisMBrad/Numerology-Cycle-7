// tests/phaseKernel.test.js

const phaseKernel = require('../core/phaseKernel');
const phase1 = require('../core/phases/phase1');

// Mocking the phase1 module to focus on testing phaseKernel independently
jest.mock('../core/phases/phase1', () => ({
  run: jest.fn(() => {
    return { status: 'active', phase: 1, log: 'Presence phase executed. Identity anchored in present moment.' };
  })
}));

describe('Phase Kernel', () => {
  beforeEach(() => {
    // Reset the mock before each test
    phase1.run.mockClear();
  });

  test('should initialize the phase kernel correctly', () => {
    console.log = jest.fn(); // Mock console.log
    phaseKernel.init();

    expect(console.log).toHaveBeenCalledWith("🔄 Phase Kernel loaded. Runtime ready.");
    expect(console.log).toHaveBeenCalledWith("🌀 Running Phase 1");
  });

  test('should run Phase 1 and log the correct information', () => {
    const result = phaseKernel.runPhase(1);
    
    expect(phase1.run).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      status: 'active',
      phase: 1,
      log: 'Presence phase executed. Identity anchored in present moment.'
    });
  });

  test('should handle unknown phases gracefully', () => {
    const unknownPhaseResult = phaseKernel.runPhase(99);
    
    expect(console.log).toHaveBeenCalledWith("⚠️ Unknown phase number.");
    expect(unknownPhaseResult).toBeUndefined();
  });
});

