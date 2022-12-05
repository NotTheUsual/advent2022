import theredoc from 'theredoc';
import { solvePart1, solvePart2 } from './day5';
import day5Input from './day5.input';

describe('Day 5', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
            [D]    
        [N] [C]    
        [Z] [M] [P]
         1   2   3 
        
        move 1 from 2 to 1
        move 3 from 1 to 3
        move 2 from 2 to 1
        move 1 from 1 to 2
      `;
      expect(solvePart1(input)).toBe('CMZ');
    });

    test('real puzzle', () => {
      const result = solvePart1(day5Input);
      expect(result).toBe('QMBMJDFTD');
    });
  });

  describe('part 2', () => {
    test('test case', () => {
      const input = theredoc`
            [D]    
        [N] [C]    
        [Z] [M] [P]
         1   2   3 
        
        move 1 from 2 to 1
        move 3 from 1 to 3
        move 2 from 2 to 1
        move 1 from 1 to 2
      `;
      expect(solvePart2(input)).toBe('MCD');
    });

    test('real puzzle', () => {
      const result = solvePart2(day5Input);
      expect(result).toBe('NBTVTJNFJ');
    });
  });
});
