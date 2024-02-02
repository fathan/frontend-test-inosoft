import { formatedNumber, sleep } from './app';

describe('TEST formatedNumber', () => {
  test('should format number with default format', () => {
    const result = formatedNumber(1234567);
    expect(result).toBe('1.234.567');
  });

  test('should format number with custom format', () => {
    const result = formatedNumber(1234567, ',');
    expect(result).toBe('1,234,567');
  });

  test('should handle negative numbers', () => {
    const result = formatedNumber(-1234567);
    expect(result).toBe('-1.234.567');
  });

  test('should handle zero', () => {
    const result = formatedNumber(0);
    expect(result).toBe('0');
  });
});

// Test for sleep function
describe('TEST sleep', () => {
  test('should resolve after a given time', async () => {
    const start = Date.now();
    await sleep(1000);
    const end = Date.now();
    const elapsedTime = end - start;
    expect(elapsedTime).toBeGreaterThanOrEqual(1000);
  });
});
