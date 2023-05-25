function twoSum(nums: number[], target: number): number[] {
    const map = {};


    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const number = map[diff];

        if (map[diff] === undefined) {
            map[nums[i]] = i;
        }else{
            return [number, i];
        }
    }
};
