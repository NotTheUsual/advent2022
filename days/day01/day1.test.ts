import theredoc from 'theredoc';
import { solvePart1 } from './day1';
import day1Input from './day1.input';
describe('Day 1', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000
      `
      expect(solvePart1(input)).toBe(24000);
    });

    test('real puzzle', () => {
      const result = solvePart1(day1Input);
      expect(result).toBe(71780);
    });
  });
});
