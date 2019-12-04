//From 343 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  let multiples = Math.floor(n / 3);
  let remainder = n % 3;
  if (remainder <= 1) {
    multiples--;
    remainder += 3;
  }
  return 3 ** multiples * remainder;
}
