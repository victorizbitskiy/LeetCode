function removeDuplicates(nums: number[]): number {
  const s = new Set<number>(nums);
  nums.length = 0;
  nums.push(...Array.from(s.values()))
  return s.size;
}