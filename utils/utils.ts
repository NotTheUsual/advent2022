export function isPresent<TItem>(item: TItem | undefined | null): item is TItem {
  return !!item;
}

export const intersection = <TItem>(set1: Set<TItem>, set2: Set<TItem>): Set<TItem> => {
  return new Set([...set1].filter(item => set2.has(item)));
};

export const createRange = (from: number, to: number): number[] => {
  const range: number[] = [];
  for (let number = from; number <= to; number += 1) {
    range.push(number);
  }
  return range;
};

export const times = (count: number) => {
  return {
    do: (callback: () => void) => {
      for (let number = 0; number < count; number += 1) {
        callback();
      }
    }
  }
}
