function runningSum(nums: number[]): number[] {
     let result: number = 0;
     return nums.map(item => result += item);
};

// function runningSum(nums: number[]): number[] {
//   const result: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     let subNums: number[] = [];
//     let subSum: number = 0;

//     subNums = nums.slice(0, i + 1);

//     for (let j = 0; j < subNums.length; j++) {
//       subSum = subSum + subNums[j];
//     }

//     result.push(subSum);

//   }

//   return result;
// };