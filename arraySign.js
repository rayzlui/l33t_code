//From 1822 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function arraySign(nums) {
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current === 0) {
      return 0;
    }
    if (current < 0) {
      result = -result;
    }
  }
  return result;
}
