//From 485 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current += 1;
    } else {
      current = 0;
    }
    max = Math.max(current, max);
  }
  return max;
}
