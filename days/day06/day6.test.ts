import { solvePart1, solvePart2 } from './day6';
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

  describe('part 1', () => {
    test('test case 1', () => {
      const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
      expect(solvePart2(input)).toBe(19);
    });
    
    test('test case 2', () => {
      const input = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
      expect(solvePart2(input)).toBe(23);
    });

    test('test case 3', () => {
      const input = 'nppdvjthqldpwncqszvftbrmjlhg'
      expect(solvePart2(input)).toBe(23);
    });

    test('test case 4', () => {
      const input = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
      expect(solvePart2(input)).toBe(29);
    });

    test('test case 5', () => {
      const input = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
      expect(solvePart2(input)).toBe(26);
    });

    test('real puzzle', () => {
      const result = solvePart2(day6Input);
      expect(result).toBe(3476);
    });
  });
});
