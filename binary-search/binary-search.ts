function search(nums: number[], target: number): number {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  if (target < nums[startIndex] || target > nums[endIndex]) {
    return -1;
  }

  while (true) {
    if (target === nums[startIndex]) {
      return startIndex;
    }

    if (target === nums[endIndex]) {
      return endIndex;
    }

    if (endIndex - startIndex <= 1) {
      return -1;
    }

    const middle = Math.floor((startIndex + endIndex) / 2);

    if (target > nums[middle]) {
      startIndex = middle + 1;
    }

    if (target < nums[middle]) {
      endIndex = middle - 1;
    }

    if (target === nums[middle]) {
      return middle;
    }
  }
};