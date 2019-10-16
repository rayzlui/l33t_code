//From 35 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
  let index = nums.indexOf(target);
  if (index === -1) {
    let i = 0;
    for (; i < nums.length; i++) {
      if (nums[i] > target) {
        return i;
      }
    }
    return i;
  }
  return index;
};
