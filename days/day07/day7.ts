import get from 'lodash.get';
import set from 'lodash.set';

type Directory = {
  type: 'dir';
  name: string;
  contents: ItemStore;
}
type File = {
  type: 'file';
  name: string;
  size: number;
}
type Item = Directory | File;

type ItemStore = Record<string, Item>;

const newDirectory = (name: string): Directory => ({ type: 'dir', name, contents: {} });
const newFile = (name: string, size: number): File => ({ type: 'file', name, size });

const withContents = (array: string[]): string[] => {
  return array.map((item) => ([item, 'contents'])).flat();
}

const hasValue = (store: ItemStore, workingDirectory: string[], key: string): boolean => {
  const keysWithContent = withContents(workingDirectory);
  return Boolean(
    get(store, [...keysWithContent, key])
  );
};

const setValue = (store: ItemStore, workingDirectory: string[], key: string, value: Item) => {
  const keysWithContent = withContents(workingDirectory);
  return set(store, [...keysWithContent, key], value);
}


const parseInput = (input: string): ItemStore => {
  const lines = input.split('\n');
  const contents: ItemStore = {};
  let workingDirectory: string[] = [];

  for (const line of lines) {
    if (line.startsWith('$ cd')) {
      const [, directory] = line.split('$ cd ');
      if (directory === '..') {
        workingDirectory.pop();
      } else {
        workingDirectory.push(directory)
      }
    } else if (line.startsWith('dir')) {
      const [, name] = line.split('dir ');
      if (!hasValue(contents, workingDirectory, name)) {
        setValue(contents, workingDirectory, name, newDirectory(name));
      }
    } else if (line.match(/^\d+.*/)) {
      const [, size, name] = line.match(/^(\d+) (\S+)$/) || [];
      if (!size || !name) continue;
      setValue(contents, workingDirectory, name, newFile(name, Number(size)));
    }
  }

  return contents;
}

type DirectorySize = { name: string; size: number; };
type SizeResult = {
  totalSize: number;
  directories: DirectorySize[];
}

const getDirectorySizes = (itemStore: ItemStore): SizeResult => {
  let directories: DirectorySize[] = [];
  let totalSize = 0;
  Object.values(itemStore).forEach((item) => {
    if (item.type === 'file') {
      totalSize += item.size;
    } else {
      const directoryContents = getDirectorySizes(item.contents);
      totalSize += directoryContents.totalSize;
      directories = directories.concat(directoryContents.directories);
      directories.push({ name: item.name, size: directoryContents.totalSize });
    }
  })
  return { directories, totalSize };
}

const smallDirectories = (itemStore: ItemStore): DirectorySize[] => {
  const sizes = getDirectorySizes(itemStore);
  return sizes.directories
    .filter((directory) => directory.size <= 100000);
};

const totalSize = (directories: DirectorySize[]): number => {
  return directories.reduce((total, directory) => total + directory.size, 0);
}

export function solvePart1 (input: string): number {
  const directoryStructure = parseInput(input);
  const directories = smallDirectories(directoryStructure);
  return totalSize(directories);
}
