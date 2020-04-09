//From 33 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

//faster

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchII(nums, target) {
  return nums.indexOf(target);
}
