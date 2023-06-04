function fizzBuzz(n: number): string[] {
  let result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result[i - 1] = "FizzBuzz";
      continue;
    }

    if (i % 3 === 0) {
      result[i - 1] = "Fizz";
      continue;
    }

    if (i % 5 === 0) {
      result[i - 1] = "Buzz";
      continue;
    }

    result[i - 1] = String(i);
  }

  return result;
};
