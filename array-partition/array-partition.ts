function arrayPairSum(nums: number[]): number {
    let res = 0
    const sortedNums = nums.sort((a, b) => a - b)
    
    for (let i = 0; i < sortedNums.length; i += 2) {
        res += sortedNums[i]
    }
    return res
};