//From leetcode 628

/**
 * @param {number[]} nums
 * @return {number}
 */
let maximumProduct = function(numbers) {
  let nums = numbers.sort((x, y) => y - x);
  if (nums.length > 3) {
    nums.filter(x => x !== 0);
  }
  if (nums[0] < 0) {
    return nums.splice(0, 3).reduce((curr, acc) => curr * acc, 1);
  }
  let negs = nums[nums.length - 1] * nums[nums.length - 2] * nums[0];
  let pos = nums[1] * nums[2] * nums[0];
  return negs > pos ? negs : pos;
};
