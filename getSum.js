//From 371 in LeetCode

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
  let divisor = a > b ? a : b;
  a = a / divisor;
  b = b / divisor;
  let mathing = 2 ** a * 2 ** b;
  let value = mathing.toString() / 1;
  let result = Math.log2(value);
  return result * divisor;
}
