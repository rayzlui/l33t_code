//From 326 in LeetCode

/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function(n) {
  while (n > 1) {
    n = n / 3;
  }
  if (n === 1) {
    return true;
  }
  return false;
};
