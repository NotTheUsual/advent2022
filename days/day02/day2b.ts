// Rock - A - X - 1
// Paper - B - Y - 2
// Scissors - C - Z - 3

type TheirMove = 'A' | 'B' | 'C';
type Result = 'X' | 'Y' | 'Z';
type Match = [TheirMove, Result];

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const resultScores: Record<Result, number> = {
  X: 0,
  Y: 3,
  Z: 6
};

const moveScores: Record<TheirMove, Record<Result, number>> = {
  A: { X: SCISSORS, Y: ROCK, Z: PAPER },
  B: { X: ROCK, Y: PAPER, Z: SCISSORS },
  C: { X: PAPER, Y: SCISSORS, Z: ROCK },
}

const parseInput = (input: string): Match[] => {
  return input.split('\n')
    .map(line => {
      return line.split(' ') as Match;
    });
};

const calculateScoresFor = (matches: Match[]): number => {
  return matches.reduce((total, [theirMove, result]) => {
    const resultScore = resultScores[result];
    const moveScore = moveScores[theirMove][result];
    return total + moveScore + resultScore;
  }, 0);
}

export function solvePart2 (input: string): number {
  const matches = parseInput(input);
  return calculateScoresFor(matches);
}
