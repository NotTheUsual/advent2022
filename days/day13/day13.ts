type Item = number | Array<Item>;
type Pair = [Array<Item>, Array<Item>];
type LargerResult = 'left' | 'right' | 'neither';

const parseInput = (input: String): Array<Pair> => {
  return input
    .split('\n\n')
    .map((pairs) => {
      return pairs
        .split('\n')
        .map((items) => {
          const parsed = JSON.parse(items);
          return parsed;
        }) as Pair;
    })
}

const compareItems = (left: Item, right: Item): LargerResult => {
  if (Array.isArray(left) && Array.isArray(right)) {
    return compareList(left, right);
  } else if (Array.isArray(left) && !Array.isArray(right)) {
    return compareList(left, [right]);
  } else if (!Array.isArray(left) && Array.isArray(right)) {
    return compareList([left], right);
  } else if (!Array.isArray(left) && !Array.isArray(right)) {
    if (left > right) return 'left';
    if (right > left) return 'right';
    return 'neither'
  }
  return 'neither';
}

const compareList = (left: Array<Item>, right: Array<Item>): LargerResult => {
  const maxLength = Math.max(left.length, right.length);
  for (let index = 0; index < maxLength; index += 1) {
    if (left[index] === undefined) return 'right';
    if (right[index] === undefined) return 'left';
    const result = compareItems(left[index], right[index]);
    if (result !== 'neither') return result;
  }
  return 'neither';
}

const grabCorrectPairIndices = (pairs: Array<Pair>): number[] => {
  const correctPairs: number[] = [];

  pairs.forEach((pair, index) => {
    const officialIndex = index + 1;
    const larger = compareList(pair[0], pair[1]);
    if (larger === 'right') correctPairs.push(officialIndex);
  });

  return correctPairs;
}

export function solvePart1 (input: string): number {
  const pairs = parseInput(input);
  const correct = grabCorrectPairIndices(pairs);
  console.log({ correct });
  return correct.reduce((sum, index) => sum + index);
}
