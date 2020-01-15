//From 991 in LeetCode

/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
function brokenCalc(X, Y) {
  let result = 0;
  while (Y > X) {
    result++;
    if (Y % 2 === 1) {
      Y++;
    } else {
      Y = Y / 2;
    }
  }
  return result + (X - Y);
}
