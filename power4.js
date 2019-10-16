//From 342 in LeetCode

/**
 * @param {number} num
 * @return {boolean}
 */
let isPowerOfFour = function(num) {
  while (num >= 4) {
    num = num / 4;
  }
  if (num === 1) {
    return true;
  }
  return false;
};
