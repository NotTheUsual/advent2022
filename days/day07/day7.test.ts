import theredoc from 'theredoc';
import { solvePart1 } from './day7';
import day7Input from './day7.input';

describe('Day 7', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        $ cd /
        $ ls
        dir a
        14848514 b.txt
        8504156 c.dat
        dir d
        $ cd a
        $ ls
        dir e
        29116 f
        2557 g
        62596 h.lst
        $ cd e
        $ ls
        584 i
        $ cd ..
        $ cd ..
        $ cd d
        $ ls
        4060174 j
        8033020 d.log
        5626152 d.ext
        7214296 k
      `
      expect(solvePart1(input)).toBe(95437);
    });

    test('real puzzle', () => {
      const result = solvePart1(day7Input);
      expect(result).toBe(95437);
    });
  });
});
