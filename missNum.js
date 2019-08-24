//From 268 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  let sum = 0;
  let actual = 0;
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] !== undefined) {
      sum += nums[i];
    }
    actual += i;
  }
  return actual - sum;
}
