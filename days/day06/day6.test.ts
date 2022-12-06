import { solvePart1 } from './day6';
import day6Input from './day6.input';

describe('Day 6', () => {
  describe('part 1', () => {
    test('test case 1', () => {
      const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
      expect(solvePart1(input)).toBe(7);
    });
    
    test('test case 2', () => {
      const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
      expect(solvePart1(input)).toBe(5);
    });

    test('test case 3', () => {
      const input = 'nppdvjthqldpwncqszvftbrmjlhg'
      expect(solvePart1(input)).toBe(6);
    });

    test('test case 4', () => {
      const input = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
      expect(solvePart1(input)).toBe(10);
    });

    test('test case 5', () => {
      const input = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
      expect(solvePart1(input)).toBe(11);
    });

    test('real puzzle', () => {
      const result = solvePart1(day6Input);
      expect(result).toBe(1210);
    });
  });
});
