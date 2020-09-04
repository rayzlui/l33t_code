//From 1567 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
  let max = 0;
  let negs = 0;
  let start = 0;
  let firstNegative = null;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num < 0) {
      negs++;
      if (firstNegative === null) {
        firstNegative = i;
      }
    } else if (num === 0) {
      negs = 0;
      firstNegative = null;
      start = i + 1;
    }
    if (negs % 2 === 0) {
      let size = i - start + 1;
      max = Math.max(size, max);
    }
    if (negs % 2 === 1) {
      let size = i - firstNegative;
      max = Math.max(size, max);
    }
  }

  return max;
};
