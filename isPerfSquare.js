//From 367 in LeetCode

/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  for (let i = 0; i <= num / 4 + 1; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
}
