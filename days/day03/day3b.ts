import { intersection } from '../../utils/utils';

type Backpack = Set<string>;
type BackpackGroup = [Backpack, Backpack, Backpack];

const dumbPriorityLookup = '*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const calculatePriorityFor = (group: BackpackGroup): number => {
  return [...intersection(intersection(group[0], group[1]), group[2])]
    .reduce((total, item) => {
      return total + dumbPriorityLookup.indexOf(item);
    }, 0);
}

const calculatePriorities = (backpacks: BackpackGroup[]): number => {
  return backpacks.reduce((total, backpack) => {
    return total + calculatePriorityFor(backpack);
  }, 0);
}

const parseInput = (input: string): BackpackGroup[] => {
  const allBackpacks = input.split('\n').map(line => new Set(line.split('')))
  const groups: BackpackGroup[] = [];
  for (let index = 0; index < allBackpacks.length; index += 3) {
    groups.push([allBackpacks[index], allBackpacks[index + 1], allBackpacks[index + 2]])
  }
  return groups;
}

export function solvePart2 (input: string): number {
  const backpacks = parseInput(input);
  return calculatePriorities(backpacks);
}
