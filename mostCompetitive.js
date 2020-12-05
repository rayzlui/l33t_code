//From 1673 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function mostCompetitive(nums, k) {
  if (nums.length === k) {
    return nums;
  }
  if (nums.length === 1) {
    return [Math.min(...nums)];
  }
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (
      stack.length > 0 &&
      nums[i] < stack[stack.length - 1] &&
      nums.length - i + stack.length > k
    ) {
      stack.pop();
    }
    if (stack.length < k) {
      stack.push(nums[i]);
    }
  }
  return stack;
}
