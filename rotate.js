//From 189 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  for (let i = 0; i < k; i++) {
    let num = nums.pop();
    nums.unshift(num);
  }
  return nums;
}
