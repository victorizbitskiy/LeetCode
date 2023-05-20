function longestPalindrome(s: string): number {
  let result = 0;

  const charFreq = new Map<string, number>();

  for (const c of s) {
    const currentFreq = charFreq.get(c);
    if (!currentFreq) {
      charFreq.set(c, 1);
    } else {
      charFreq.set(c, currentFreq + 1);
    }
  }

  let isThereAnyOddFrequencies = 0;

  for (const [i, frequency] of charFreq) {
    if (frequency % 2 === 0) {
      result += frequency;
    } else {
      result += frequency - 1;
      isThereAnyOddFrequencies = 1;
    }
  }

  return result + isThereAnyOddFrequencies;
}