//From 1437 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function kLengthApart(nums, k) {
  let lastOne;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (lastOne) {
        if (i - lastOne - 1 < k) {
          return false;
        }
      }
      lastOne = i;
    }
  }
  return true;
}
