function plusOne(digits: number[]): number[] {
  const result: number[] = [];

  const plusOneString = (BigInt(digits.join('')) + BigInt(1)).toString();

  for (let i = 0; i < plusOneString.length; i++) {
    result[i] = +plusOneString[i];
  }

  return result;
};