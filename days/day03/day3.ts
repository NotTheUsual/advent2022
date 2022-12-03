import { intersection } from '../../utils/utils';

interface Backpack {
  firstHalf: Set<string>;
  secondHalf: Set<string>;
}

const dumbPriorityLookup = '*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const calculatePriorityFor = (backpack: Backpack): number => {
  return [...intersection(backpack.firstHalf, backpack.secondHalf)]
    .reduce((total, item) => {
      return total + dumbPriorityLookup.indexOf(item);
    }, 0);
}

const calculatePriorities = (backpacks: Backpack[]): number => {
  return backpacks.reduce((total, backpack) => {
    return total + calculatePriorityFor(backpack);
  }, 0);
}

const parseBackpackHalf = (half: string): Set<string> => {
  return new Set(half.split(''));
}

const parseInput = (input: string): Backpack[] => {
  return input.split('\n')
    .map(line => {
      return {
        firstHalf: parseBackpackHalf(line.slice(0, line.length / 2)),
        secondHalf: parseBackpackHalf(line.slice(line.length / 2))
      }
    })
}

export function solvePart1 (input: string): number {
  const backpacks = parseInput(input);
  return calculatePriorities(backpacks);
}
