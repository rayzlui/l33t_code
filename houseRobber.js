//From 198 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  return nums.reduce((acc, curr) => [acc[1], Math.max(acc[1], acc[0] + curr)], [
    0,
    0,
  ])[1];
}
