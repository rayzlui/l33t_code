//From 494 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
function findTargetSumWays(nums, S) {
  let result = 0;
  function recursion(index, sums) {
    if (index === nums.length) {
      if (sums === S) {
        result++;
      }
      return;
    }
    recursion(index + 1, sums + nums[index]);
    recursion(index + 1, sums - nums[index]);
  }
  recursion(0, 0);
  return result;
}
