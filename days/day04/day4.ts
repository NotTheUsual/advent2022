import { isPresent } from "../../utils/utils";

type Section = [start: number, end: number];
type ElfPair = [Section, Section];

const parseInput = (input: string): ElfPair[] => {
  return input.split('\n').map((line) => {
    const sections = line.match(/^(\d+)-(\d+),(\d+)-(\d+)$/);
    if (!sections) return null;
    return [
      [Number(sections[1]), Number(sections[2])] as Section,
      [Number(sections[3]), Number(sections[4])] as Section,
    ] as ElfPair;
  }).filter(isPresent);
}

const contains = (section1: Section, section2: Section): boolean => {
  return section1[0] <= section2[0] && section1[1] >= section2[1];
}

const countOverlaps = (elves: ElfPair[]): number => {
  return elves.filter((elfPair) => {
    return contains(elfPair[0], elfPair[1]) || contains(elfPair[1], elfPair[0]);
  }).length;
};

export function solvePart1 (input: string): number {
  const elves = parseInput(input);
  return countOverlaps(elves);
}
