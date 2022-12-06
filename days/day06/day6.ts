export function solvePart1 (input: string): number {
  const characters = input.split('');
  for (let index = 3; index < characters.length; index += 1) {
    const mostRecentCharacters = new Set([characters[index], characters[index - 1], characters[index - 2], characters[index - 3]])
    if (mostRecentCharacters.size === 4) return index + 1;
  }
  return 0;
}

export function solvePart2 (input: string): number {
  const characters = input.split('');
  for (let index = 13; index < characters.length; index += 1) {
    const mostRecentCharacters = new Set(characters.slice(index - 13, index + 1))
    if (mostRecentCharacters.size === 14) return index + 1;
  }
  return 0;
}
