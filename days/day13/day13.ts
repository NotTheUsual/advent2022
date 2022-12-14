type Item = number | Array<Item>;
type Packet = Array<Item>;
type Pair = [Packet, Packet];
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

const compareList = (left: Packet, right: Packet): LargerResult => {
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
  return correct.reduce((sum, index) => sum + index);
}

const sortPackets = (pairs: Array<Pair>): Array<Packet> => {
  const dividerPackets: Array<Packet> = [[[2]], [[6]]];
  const packets = pairs.flat().concat(dividerPackets);
  return packets.sort((packetA, packetB) => {
    const result = compareList(packetA, packetB);
    switch (result) {
      case 'left': return 1;
      case 'neither': return 0;
      case 'right': return -1;
    }
  });
}

const getDecoderKeyFrom = (packets: Array<Packet>): number => {
  let twoIndex = 0;
  let sixIndex = 0;
  packets.find((packet, index) => {
    const packetAsString = JSON.stringify(packet);
    if (packetAsString === '[[2]]') {
      twoIndex = index + 1;
    }
    if (packetAsString === '[[6]]') {
      sixIndex = index + 1;
      return true;
    }
  });
  return twoIndex * sixIndex;
};

export function solvePart2 (input: string): number {
  const pairs = parseInput(input);
  const sorted = sortPackets(pairs);
  return getDecoderKeyFrom(sorted);
}
