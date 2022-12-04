import { isPresent } from "../../utils/utils";

type Section = { start: number; end: number; };
type ElfPair = [Section, Section];

const parseInput = (input: string): ElfPair[] => {
  return input.split('\n').map((line) => {
    const sections = line.match(/^(\d+)-(\d+),(\d+)-(\d+)$/);
    if (!sections) return null;
    return [
      { start: Number(sections[1]), end: Number(sections[2])} as Section,
      { start: Number(sections[3]), end: Number(sections[4])} as Section
    ] as ElfPair;
  }).filter(isPresent);
}

const contains = (section1: Section, section2: Section): boolean => {
  return section1.start <= section2.start && section1.end >= section2.end;
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
