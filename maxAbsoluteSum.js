//From 1749 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAbsoluteSum(nums) {
  let sum = 0;
  let max = 0;
  let min = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(sum, max);
    min = Math.min(sum, min);
  }
  return max - min;
}
