//From 53 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
  let current = 0;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i] + current, max);
    current = Math.max(nums[i] + current, 0);
  }
  return max;
};
