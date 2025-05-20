// tests/phaseKernel.test.js

const phaseKernel = require('../core/phaseKernel');
const phase1 = require('../core/phases/phase1');
const phase2 = require('../core/phases/phase2');

jest.mock('../core/phases/phase1', () => ({
  run: jest.fn(() => ({
    status: 'active',
    phase: 1,
    log: 'Presence phase executed. Identity anchored in present moment.'
  }))
}));

jest.mock('../core/phases/phase2', () => ({
  run: jest.fn(() => ({
    status: 'active',
    phase: 2,
    log: 'Planning phase executed. Strategic intent calibrated.'
  }))
}));

describe('Phase Kernel', () => {
  beforeEach(() => {
    phase1.run.mockClear();
    phase2.run.mockClear();
    console.log = jest.fn();
  });

  test('should initialize the phase kernel correctly', () => {
    phaseKernel.init();

    expect(console.log).toHaveBeenCalledWith("🔄 Phase Kernel loaded. Runtime ready.");
    expect(console.log).toHaveBeenCalledWith("🌀 Running Phase 1");
  });

  test('should run Phase 1 and return expected log', () => {
    const result = phaseKernel.runPhase(1);

    expect(phase1.run).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      status: 'active',
      phase: 1,
      log: 'Presence phase executed. Identity anchored in present moment.'
    });
  });

  test('should run Phase 2 and return expected log', () => {
    const result = phaseKernel.runPhase(2);

    expect(phase2.run).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      status: 'active',
      phase: 2,
      log: 'Planning phase executed. Strategic intent calibrated.'
    });
  });

  test('should handle unknown phase numbers gracefully', () => {
    const result = phaseKernel.runPhase(99);

    expect(console.log).toHaveBeenCalledWith("⚠️ Unknown or unconfigured phase number.");
    expect(result).toBeUndefined();
  });
});

