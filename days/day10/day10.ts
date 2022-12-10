type Command = 'addx' | 'noop';
interface BaseInstruction {
  command: Command;
  value?: number;
}
interface AddInstruction extends BaseInstruction {
  command: 'addx';
  value: number;
}
interface NoInstruction extends BaseInstruction {
  command: 'noop';
  value?: never;
}
type Instruction = AddInstruction | NoInstruction;

const parseInput = (input: string): Instruction[] => {
  return input.split('\n').map((line) => {
    const [command, value] = line.split(' ');
    if (command === 'addx') {
      return { command: 'addx', value: Number(value) };
    } else {
      return { command: 'noop' };
    }
  });
}

const run = (instructions: Instruction[]): number[] => {
  let X = 1;
  let cycles = [1, 1];

  instructions.forEach((instruction) => {
    if (instruction.command === 'noop') {
      cycles.push(X);
    } else {
      cycles.push(X);
      X += instruction.value;
      cycles.push(X);
    }
  });

  return cycles;
}

const getSignalStrength = (cycles: number[], cycle: number): number => {
  const X = cycles[cycle] || 0;
  return X * cycle;
}

export function solvePart1 (input: string): number {
  const instructions = parseInput(input);
  const cycles = run(instructions);
  return getSignalStrength(cycles, 20) + getSignalStrength(cycles, 60) + getSignalStrength(cycles, 100) + getSignalStrength(cycles, 140) + getSignalStrength(cycles, 180) + getSignalStrength(cycles, 220)
}
