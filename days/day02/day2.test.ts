import theredoc from 'theredoc';
import { solvePart1 } from './day2';
import day2Input from './day2.input';
describe('Day 2', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        A Y
        B X
        C Z
      `
      expect(solvePart1(input)).toBe(15);
    });

    test('real puzzle', () => {
      const result = solvePart1(day2Input);
      expect(result).toBe(10310);
    });
  });
});
