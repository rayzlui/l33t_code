//From 172 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function trailingZeroes(n) {
  let zeroes = 0;
  while (n >= 5) {
    let num = Math.floor(n / 5);
    zeroes += num;
    n = num;
  }
  return zeroes;
}
