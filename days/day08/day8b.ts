type Trees = number[][];
type Point = { x: number; y: number; };

const atEdgeOf = (trees: Trees, { x, y }: Point): boolean => {
  return x === 0
    || y === 0
    || x === trees[0].length - 1
    || y === trees.length - 1;
}

const scoreNorth = (trees: Trees, from: Point): number => {
  let score = 0;
  const treeHeight = trees[from.y][from.x];
  for (let nextY = from.y - 1; nextY >= 0; nextY -= 1) {
    score += 1;
    if (treeHeight <= trees[nextY][from.x]) return score;
  }
  return score;
}
const scoreSouth = (trees: Trees, from: Point): number => {
  let score = 0;
  const treeHeight = trees[from.y][from.x];
  for (let nextY = from.y + 1; nextY <= trees.length - 1; nextY += 1) {
    score += 1;
    if (treeHeight <= trees[nextY][from.x]) return score;
  }
  return score;
}
const scoreEast = (trees: Trees, from: Point): number => {
  let score = 0;
  const treeHeight = trees[from.y][from.x];
  for (let nextX = from.x + 1; nextX <= trees[from.y].length - 1; nextX += 1) {
    score += 1
    if (treeHeight <= trees[from.y][nextX]) return score;
  }
  return score;
}
const scoreWest = (trees: Trees, from: Point): number => {
  let score = 0;
  const treeHeight = trees[from.y][from.x];
  for (let nextX = from.x - 1; nextX >= 0; nextX -= 1) {
    score += 1;
    if (treeHeight <= trees[from.y][nextX]) return score;
  }
  return score;
}


const findHighestScoringTreeIn = (trees: Trees): number => {
  let highestScore = 0;
  trees.forEach((row, y) => {
    row.forEach((column, x) => {
      if (atEdgeOf(trees, { x, y })) return;

      const score = 
        scoreNorth(trees, { x, y })
        * scoreEast(trees, { x, y })
        * scoreSouth(trees, { x, y })
        * scoreWest(trees, { x, y });
      
      highestScore = score > highestScore ? score : highestScore;
    })
  })
  return highestScore;
};

const parseInput = (input: string): Trees => {
  return input
    .split('\n')
    .map((line) => {
      return line
        .split('')
        .map((character) => Number(character));
    });
}

export function solvePart2 (input: string): number {
  const trees = parseInput(input);
  return findHighestScoringTreeIn(trees);
}
