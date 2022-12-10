import theredoc from 'theredoc';
import { solvePart1 } from './day9';
import day9Input from './day9.input';

describe('Day 9', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        R 4
        U 4
        L 3
        D 1
        R 4
        D 1
        L 5
        R 2`
      expect(solvePart1(input)).toBe(13);
    });

    test('real puzzle', () => {
      const result = solvePart1(day9Input);
      expect(result).toBe(6563);
    });
  });
});
