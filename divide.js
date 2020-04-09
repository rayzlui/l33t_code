//From 29 in LeetCode

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
  if (divisor === 1) {
    return dividend;
  }
  let result = 0;
  let isEndNeg = dividend < 0 ? true : false;
  let isSorNeg = divisor < 0 ? true : false;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while (dividend >= divisor) {
    result++;
    dividend = dividend - divisor;
  }
  if (result > 2147483647) {
    result = isEndNeg === isSorNeg ? 2147483647 : 2147483648;
  }
  return isEndNeg === isSorNeg ? result : 0 - result;
}
