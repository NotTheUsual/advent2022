import theredoc from 'theredoc';
import { solvePart1 } from './day3';
import { solvePart2 } from './day3b';
import day3Input from './day3.input';

describe('Day 3', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw
      `
      expect(solvePart1(input)).toBe(157);
    });

    test('real puzzle', () => {
      const result = solvePart1(day3Input);
      expect(result).toBe(7763);
    });
  });

  describe('part 2', () => {
    test('test case', () => {
      const input = theredoc`
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw
      `
      expect(solvePart2(input)).toBe(70);
    });

    test('real puzzle', () => {
      const result = solvePart2(day3Input);
      expect(result).toBe(2569);
    });
  });
});
