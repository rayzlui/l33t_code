//From 1413 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function minStartValue(nums) {
  let current = 0;
  let lowest = 0;
  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    lowest = Math.min(lowest, current);
  }
  return lowest * -1 + 1;
}
