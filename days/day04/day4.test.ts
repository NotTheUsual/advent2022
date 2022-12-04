import theredoc from 'theredoc';
import { solvePart1 } from './day4';
import { solvePart2 } from './day4b';
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
  
  describe('part 2', () => {
    test('test case', () => {
      const input = theredoc`
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8`;
      expect(solvePart2(input)).toBe(4);
    });
    
    test('test case 2', () => {
      const input = theredoc`
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8
        6-8,2-4
        7-9,5-7`;
      expect(solvePart2(input)).toBe(5);
    });

    test('real puzzle', () => {
      const result = solvePart2(day4Input);
      expect(result).toBe(804);
    });
  });
});
