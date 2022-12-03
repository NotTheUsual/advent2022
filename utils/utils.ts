export function isPresent<TItem>(item: TItem | undefined | null): item is TItem {
  return !!item;
}

export const intersection = <TItem>(set1: Set<TItem>, set2: Set<TItem>): Set<TItem> => {
  return new Set([...set1].filter(item => set2.has(item)));
};
