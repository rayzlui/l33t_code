//From 1800 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAscendingSum(nums) {
  let max = 0;
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentSum += nums[i];
    } else {
      max = Math.max(max, currentSum);
      currentSum = nums[i];
    }
  }
  return Math.max(currentSum, max);
}
