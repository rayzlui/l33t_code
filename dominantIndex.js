//From 747 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
let dominantIndex = function(nums) {
  let largest = Math.max(...nums);
  let index = nums.indexOf(largest);
  nums.splice(index, 1);
  if (nums.every(x => x <= largest / 2)) {
    return index;
  } else {
    return -1;
  }
};
