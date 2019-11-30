//From 215 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  nums = nums.sort((x, y) => y - x);
  return nums[k - 1];
}
