/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let j = 0

  for (let i = 0; i < nums.length; i++) {

    if (j === nums.length) {
      break
    }

    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
    }

    j++
  }
}