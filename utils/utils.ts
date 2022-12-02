export function isPresent<TItem>(item: TItem | undefined | null): item is TItem {
  return !!item;
}
