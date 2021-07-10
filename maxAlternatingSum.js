//From 1911 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxAlternatingSum(nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result += Math.max(nums[i] - nums[i - 1], 0);
  }
  return result;
}
