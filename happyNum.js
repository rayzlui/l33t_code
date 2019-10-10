//From 202 in LeetCode

/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function(n) {
  function squareSum(x) {
    return x
      .toString()
      .split('')
      .map(dig => dig * dig)
      .reduce((squared, acc) => squared / 1 + acc, 0);
  }
  let num = squareSum(n);
  let seen = {};
  while (num !== 1) {
    num = squareSum(num);
    if (seen[num] === true) {
      return false;
    }
    seen[num] = true;
  }
  return num === 1;
};
