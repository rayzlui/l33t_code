//From 525 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
  let result = 0;
  let holder = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count--;
    } else {
      count++;
    }
    if (count === 0) {
      result = i + 1;
    }
    if (holder[count] !== undefined) {
      result = Math.max(result, i - holder[count]);
    } else {
      holder[count] = i;
    }
  }
  return result;
}
