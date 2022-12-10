import { isPresent, times } from "../../utils/utils";

type Direction = 'U' | 'D' | 'R' | 'L';
type Instruction = { direction: Direction; steps: number; };

class Point {
  x: number;
  y: number;

  constructor ({ x, y }: { x: number; y: number; }) {
    this.x = x;
    this.y = y;
  }

  get key () {
    return `${this.x},${this.y}`;
  }

  move (direction: Direction): Point {
    switch (direction) {
      case 'U': return new Point({ x: this.x, y: this.y + 1 });
      case 'R': return new Point({ x: this.x + 1, y: this.y });
      case 'D': return new Point({ x: this.x, y: this.y - 1 });
      case 'L': return new Point({ x: this.x - 1, y: this.y });
    }
  }

  moveToward (otherPoint: Point): Point {
    const xDifference = otherPoint.x - this.x;
    const yDifference = otherPoint.y - this.y;
    
    if (xDifference === 0) {
      return (yDifference > 0) ? this.move('U') : this.move('D');
    } else if (yDifference === 0) {
      return (xDifference > 0) ? this.move('R') : this.move('L');
    } else {
      if (xDifference > 0 && yDifference > 0) return this.move('R').move('U');
      if (xDifference > 0 && yDifference < 0) return this.move('R').move('D');
      if (xDifference < 0 && yDifference < 0) return this.move('L').move('D');
      if (xDifference < 0 && yDifference > 0) return this.move('L').move('U');
      return this;
    }
  }

  adjacentTo (otherPoint: Point): boolean {
    const xDifference = Math.abs(otherPoint.x - this.x);
    const yDifference = Math.abs(otherPoint.y - this.y);
    return xDifference <= 1 && yDifference <= 1;
  }
}

const parseInput = (input: string): Instruction[] => {
  return input.split('\n').map((line) => {
    const match = line.match(/^([UDRL]) (\d+)$/);
    if (!match) return null;
    const [, direction, steps] = match;
    return {
      direction: direction as Direction,
      steps: Number(steps)
    };
  }).filter(isPresent);
}

const countTailPositions = (instructions: Instruction[]): number => {
  let headPosition = new Point({ x: 0, y: 0 });
  let tailPosition = new Point({ x: 0, y: 0 });
  let tailPositions = new Set<string>([tailPosition.key]);

  for (const instruction of instructions) {
    times(instruction.steps).do(() => {
      headPosition = headPosition.move(instruction.direction);
      if (headPosition.adjacentTo(tailPosition)) return;
      tailPosition = tailPosition.moveToward(headPosition);

      tailPositions.add(tailPosition.key);
    });
  }

  return tailPositions.size;
};

export function solvePart1 (input: string): number {
  const instructions = parseInput(input);
  return countTailPositions(instructions);
}
