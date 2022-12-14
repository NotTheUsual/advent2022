import theredoc from 'theredoc';
import { solvePart1, solvePart2 } from './day13';
import day13Input from './day13.input';

describe('Day 13', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        [1,1,3,1,1]
        [1,1,5,1,1]

        [[1],[2,3,4]]
        [[1],4]

        [9]
        [[8,7,6]]

        [[4,4],4,4]
        [[4,4],4,4,4]

        [7,7,7,7]
        [7,7,7]

        []
        [3]

        [[[]]]
        [[]]

        [1,[2,[3,[4,[5,6,7]]]],8,9]
        [1,[2,[3,[4,[5,6,0]]]],8,9]`
      expect(solvePart1(input)).toBe(13);
    });

    test('real puzzle', () => {
      const result = solvePart1(day13Input);
      expect(result).toBe(5555);
    });
  });

  describe('part 2', () => {
    test('test case', () => {
      const input = theredoc`
        [1,1,3,1,1]
        [1,1,5,1,1]

        [[1],[2,3,4]]
        [[1],4]

        [9]
        [[8,7,6]]

        [[4,4],4,4]
        [[4,4],4,4,4]

        [7,7,7,7]
        [7,7,7]

        []
        [3]

        [[[]]]
        [[]]

        [1,[2,[3,[4,[5,6,7]]]],8,9]
        [1,[2,[3,[4,[5,6,0]]]],8,9]`
      expect(solvePart2(input)).toBe(140);
    });

    test('real puzzle', () => {
      const result = solvePart2(day13Input);
      expect(result).toBe(22852);
    });
  });
});
