//From 231 in LeetCode

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  while (n > 1) {
    n = n / 2;
  }
  if (n === 1) {
    return true;
  }
  return false;
}
