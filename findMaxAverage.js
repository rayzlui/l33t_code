//From 643 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let max = nums.slice(0, k).reduce((acc, curr) => acc + curr);
  let curr = max;
  for (let i = k; i < nums.length; i++) {
    curr = curr + nums[i] - nums[i - k];
    max = Math.max(curr, max);
  }
  return max / k;
}
