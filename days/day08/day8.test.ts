import theredoc from 'theredoc';
import { solvePart1 } from './day8';
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
});
