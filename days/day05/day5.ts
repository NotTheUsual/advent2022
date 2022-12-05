import { isPresent, times } from "../../utils/utils";

type Stack = Array<string>;
type Stacks = Array<Stack>;

interface Instruction {
  number: number;
  start: number;
  end: number;
}

interface ParsedInput {
  stacks: Stacks;
  instructions: Instruction[];
}

const parseInput = (input: string): ParsedInput => {
  const [initialPositions, instructions] = input.split('\n\n');

  const parsedStacks: Stacks = [];

  const initialPositionRows = initialPositions.split('\n');

  initialPositionRows.forEach((line, lineNumber) => {
    if (lineNumber === initialPositionRows.length - 1) return;
    
    const columns = line.match(/(\s{3,5}|\[\w\])/g);
    columns?.forEach((column, index) => {
      const contentMatch = column.match(/\[(\w)\]/);
      if (contentMatch) {
        const columnNumber = index + 1;
        parsedStacks[columnNumber] ||= [];
        parsedStacks[columnNumber].unshift(contentMatch[1]);
      }
    })
  })
  
  const parsedInstructions: Instruction[] = instructions.split('\n').map((line) => {
    const match = line.match(/move (\d+) from (\d+) to (\d+)/);
    if (!match) return null;
    const [,number, start, end] = match;
    return {
      number: Number(number),
      start: Number(start),
      end: Number(end)
    };
  }).filter(isPresent);

  return {
    stacks: parsedStacks,
    instructions: parsedInstructions
  }
}

const performInstructions = ({ stacks, instructions }: ParsedInput): Stacks => {
  const clonedStacks = JSON.parse(JSON.stringify(stacks)) as Stacks;
  instructions.forEach((instruction) => {
    times(instruction.number).do(() => {
      const movedCrate = clonedStacks[instruction.start].pop()!;
      clonedStacks[instruction.end].push(movedCrate);
    });
  });
  return clonedStacks;
}

const grabResultFrom = (stacks: Stacks): string => {
  return stacks
    .filter(isPresent)
    .map((column) => column.at(-1))
    .filter(isPresent)
    .join('');
}

export function solvePart1 (input: string): string {
  const { stacks, instructions } = parseInput(input);
  const updatedStacks = performInstructions({ stacks, instructions });
  return grabResultFrom(updatedStacks);
}
