const parseInput = (input: string): number[][] => {
  return input.split('\n\n').map(elf => {
    return elf.split('\n').map(line => Number(line));
  });
};

const findTheBiggestElf = (elves: number[][]): number => {
  return elves
    .map(elf => elf.reduce((prev, next) => prev + next), 0)
    .sort((a, b) => b - a)
    .at(0) ?? 0;
}

export function solvePart1 (input: string): number {
  const elves = parseInput(input);
  return findTheBiggestElf(elves);
}
