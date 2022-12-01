const parseInput = (input: string): number[][] => {
  return input.split('\n\n').map(elf => {
    return elf.split('\n').map(line => Number(line));
  });
};

const sum = (prev: number, next: number): number => prev + next;

const findTheBiggestElf = (elves: number[][]): number => {
  return elves
    .map(elf => elf.reduce(sum, 0))
    .sort((a, b) => b - a)
    .at(0) ?? 0;
}

const findTheBiggestElves = (elves: number[][]): number => {
  return elves
    .map(elf => elf.reduce(sum, 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce(sum, 0);
}

export function solvePart1 (input: string): number {
  const elves = parseInput(input);
  return findTheBiggestElf(elves);
}

export function solvePart2 (input: string): number {
  const elves = parseInput(input);
  return findTheBiggestElves(elves);
}
