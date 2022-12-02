import theredoc from 'theredoc';
import { solvePart1 } from './day2';
import { solvePart2 } from './day2b';
import day2Input from './day2.input';

describe('Day 2', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        A Y
        B X
        C Z
      `
      expect(solvePart1(input)).toBe(15);
    });

    test('real puzzle', () => {
      const result = solvePart1(day2Input);
      expect(result).toBe(10310);
    });
  });

  describe('part 2', () => {
    test('test case', () => {
      const input = theredoc`
        A Y
        B X
        C Z
      `
      expect(solvePart2(input)).toBe(12);
    });

    test('real puzzle', () => {
      const result = solvePart2(day2Input);
      expect(result).toBe(14859);
    });
  });
});
