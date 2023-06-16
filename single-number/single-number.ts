function singleNumber(nums: number[]): number {
  let prev = 0

  // ...whenever 2 same numbers are XOR'ed with each other, 
  // they cancel out to form 0, on the other hand if 0 
  // and any number are XOR'ed the output is the number itself

  for (let i = 0; i < nums.length; i++) {
    prev = prev ^ nums[i]
  }

  return prev

};