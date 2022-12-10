type Trees = number[][];
type Point = { x: number; y: number; };

const atEdgeOf = (trees: Trees, { x, y }: Point): boolean => {
  return x === 0
    || y === 0
    || x === trees[0].length - 1
    || y === trees.length - 1;
}

const isVisibleNorth = (trees: Trees, from: Point): boolean => {
  const treeHeight = trees[from.y][from.x];
  for (let nextY = from.y - 1; nextY >= 0; nextY -= 1) {
    if (treeHeight <= trees[nextY][from.x]) return false;
  }
  return true;
}
const isVisibleSouth = (trees: Trees, from: Point): boolean => {
  const treeHeight = trees[from.y][from.x];
  for (let nextY = from.y + 1; nextY <= trees.length - 1; nextY += 1) {
    if (treeHeight <= trees[nextY][from.x]) return false;
  }
  return true;
}
const isVisibleEast = (trees: Trees, from: Point): boolean => {
  const treeHeight = trees[from.y][from.x];
  for (let nextX = from.x + 1; nextX <= trees[from.y].length - 1; nextX += 1) {
    if (treeHeight <= trees[from.y][nextX]) return false;
  }
  return true;
}
const isVisibleWest = (trees: Trees, from: Point): boolean => {
  const treeHeight = trees[from.y][from.x];
  for (let nextX = from.x - 1; nextX >= 0; nextX -= 1) {
    if (treeHeight <= trees[from.y][nextX]) return false;
  }
  return true;
}


const countVisible = (trees: Trees): number => {
  let count = 0;
  trees.forEach((row, y) => {
    row.forEach((column, x) => {
      if (atEdgeOf(trees, { x, y })) {
        count += 1;
        return;
      }

      if (
        isVisibleNorth(trees, { x, y })
        || isVisibleEast(trees, { x, y })
        || isVisibleSouth(trees, { x, y })
        || isVisibleWest(trees, { x, y })
      ) {
        count += 1;
      }
    })
  })
  return count;
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

export function solvePart1 (input: string): number {
  const trees = parseInput(input);
  return countVisible(trees);
}
