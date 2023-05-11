function pivotIndex(nums: number[]): number {

  for (let i = 0; i < nums.length; i++) {
    const leftArray: number[] = nums.slice(0, i);
    const rightArray: number[] = nums.slice(i + 1, nums.length);
    const leftSum = leftArray.length ? leftArray.reduce((acc, item) => (acc += item)) : 0;
    const rightSum = rightArray.length ? rightArray.reduce((acc, item) => (acc += item)) : 0;

    if (leftSum === rightSum) {
      return i
    }
  }
  return -1
}