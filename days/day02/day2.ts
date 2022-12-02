// Rock - A - X - 1
// Paper - B - Y - 2
// Scissors - C - Z - 3

type TheirMove = 'A' | 'B' | 'C';
type MyMove = 'X' | 'Y' | 'Z';
type Match = [TheirMove, MyMove];

const WIN = 6;
const DRAW = 3;
const LOSS = 0;

const moveScores: Record<MyMove, number> = {
  X: 1,
  Y: 2,
  Z: 3
};

const results: Record<MyMove, Record<TheirMove, number>> = {
  X: { A: DRAW, B: LOSS, C: WIN },
  Y: { A: WIN, B: DRAW, C: LOSS },
  Z: { A: LOSS, B: WIN, C: DRAW }
}

const parseInput = (input: string): Match[] => {
  return input.split('\n')
    .map(line => {
      return line.split(' ') as Match;
    });
};

const calculateScoresFor = (matches: Match[]): number => {
  return matches.reduce((total, [theirMove, myMove]) => {
    const moveScore = moveScores[myMove];
    const resultScore = results[myMove][theirMove];
    return total + moveScore + resultScore;
  }, 0);
}

export function solvePart1 (input: string): number {
  const matches = parseInput(input);
  return calculateScoresFor(matches);
}
