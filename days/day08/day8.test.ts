import theredoc from 'theredoc';
import { solvePart1 } from './day8';
import { solvePart2 } from './day8b';
import day8Input from './day8.input';

describe('Day 8', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        30373
        25512
        65332
        33549
        35390
      `
      expect(solvePart1(input)).toBe(21);
    });

    test('real puzzle', () => {
      const result = solvePart1(day8Input);
      expect(result).toBe(1818);
    });
  });

  describe('part 2', () => {
    test('test case', () => {
      const input = theredoc`
        30373
        25512
        65332
        33549
        35390
      `
      expect(solvePart2(input)).toBe(8);
    });

    test('real puzzle', () => {
      const result = solvePart2(day8Input);
      expect(result).toBe(368368);
    });
  });
});
