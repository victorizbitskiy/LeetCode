function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.push(fn(element, i));
  }
  return result;
};