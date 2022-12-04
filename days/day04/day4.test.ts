import theredoc from 'theredoc';
import { solvePart1 } from './day4';
import day4Input from './day4.input';

describe('Day 4', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8`;
      expect(solvePart1(input)).toBe(2);
    });

    test('real puzzle', () => {
      const result = solvePart1(day4Input);
      expect(result).toBe(424);
    });
  });
});
