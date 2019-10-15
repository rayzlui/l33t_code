//From 26 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
