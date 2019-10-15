//From 724 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function(nums) {
  let sumL = 0;
  let sumR = nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  for (let i = 0; i < nums.length; i++) {
    sumR -= nums[i];
    if (sumL === sumR) {
      return i;
    } else {
      sumL += nums[i];
    }
  }
  return -1;
};
