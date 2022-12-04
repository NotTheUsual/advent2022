import { createRange, intersection, isPresent } from "../../utils/utils";

type Section = Set<number>;
type ElfPair = [Section, Section];

const parseInput = (input: string): ElfPair[] => {
  return input.split('\n').map((line) => {
    const sections = line.match(/^(\d+)-(\d+),(\d+)-(\d+)$/);
    if (!sections) return null;
    return [
      new Set(createRange(Number(sections[1]), Number(sections[2]))),
      new Set(createRange(Number(sections[3]), Number(sections[4])))
    ] as ElfPair;
  }).filter(isPresent);
}

const countMinimalOverlaps = (elves: ElfPair[]): number => {
  return elves.filter((elfPair) => {
    return intersection(elfPair[0], elfPair[1]).size > 0
  }).length;
}

export function solvePart2 (input: string): number {
  const elves = parseInput(input);
  return countMinimalOverlaps(elves);
}
