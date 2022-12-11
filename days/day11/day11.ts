import { isPresent, times } from '../../utils/utils';

type Operation = (item: number) => number;
type Test = (item: number) => boolean;
type Monkey = {
  items: number[];
  operation: Operation;
  test: Test;
  destinationIfTrue: number;
  destinationIfFalse: number;
}
type MonkeyCounts = Record<number, number>;
const createMonkeyCounter = () => {
  return new Proxy<MonkeyCounts>({}, {
    get: (target, index: string) => {
      const numberIndex = Number(index);
      return numberIndex in target ? target[numberIndex] : 0
    }
  })
}

const parseOperation = (operation: string): Operation => {
  const [op, number] = operation.split(' ');
  if (op === '+') {
    return (item: number) => item + (number === 'old' ? item : Number(number))
  } else {
    return (item: number) => item * (number === 'old' ? item : Number(number))
  }
}

const parseTest = (test: string): Test => {
  return (item: number) => {
    return (item % Number(test)) === 0;
  };
};

const parseInput = (input: string): Monkey[] => {
  return input
    .split(/\sMonkey/g)
    .map((monkey) => {
      const itemMatch = monkey.match(/Starting items: (.+)\n/);
      const opMatch = monkey.match(/Operation: new = old (.+)\n/);
      const testMatch = monkey.match(/Test: divisible by (.*)\n/);
      const truthyMatch = monkey.match(/If true: throw to monkey (.*)\n/);
      const falseyMatch = monkey.match(/If false: throw to monkey (.*)(?:\n|)/);
      if (!itemMatch || !opMatch || !testMatch || !truthyMatch || !falseyMatch) return null;

      const items: number[] = itemMatch[1].split(', ').map(number => Number(number));
      const operation: Operation = parseOperation(opMatch[1]);
      const test: Test = parseTest(testMatch[1]);

      return {
        items,
        operation,
        test,
        destinationIfTrue: Number(truthyMatch[1]),
        destinationIfFalse: Number(falseyMatch[1])
      }
    }).filter(isPresent);
};

const getBoredWith = (item: number): number => {
  return Math.floor(item / 3);
}

const runRound = (monkeys: Monkey[], counter: MonkeyCounts): [Monkey[], MonkeyCounts] => {
  monkeys.forEach((monkey, index) => {
    monkey.items.forEach((item) => {
      const inspectedItem = monkey.operation(item);
      const rejectedItem = getBoredWith(inspectedItem)
      if (monkey.test(rejectedItem)) {
        monkeys[monkey.destinationIfTrue].items.push(rejectedItem)
      } else {
        monkeys[monkey.destinationIfFalse].items.push(rejectedItem)
      }
      counter[index] += 1;
    });
    monkey.items = [];
  });

  return [monkeys, counter];
}

const getHighestCounts = (monkeys: Monkey[], counter: MonkeyCounts): [number, number] => {
  const counts = monkeys
    .map((monkey, index) => counter[index])
    .sort((a, b) => b - a);
  return [counts[0], counts[1]];
};

export function solvePart1 (input: string): number {
  const monkeys = parseInput(input);
  const counter = createMonkeyCounter();
  times(20).do(() => {
    runRound(monkeys, counter);
  });
  const [highest, secondHighest] = getHighestCounts(monkeys, counter);
  return highest * secondHighest;
}
