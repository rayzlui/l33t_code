//From 633 in LeetCode

/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
  let limit = Math.floor(Math.sqrt(c));
  for (let i = 0; i <= limit; i++) {
    let check = c - i * i;
    let sqrt = Math.sqrt(check);
    if (sqrt === Math.floor(sqrt)) {
      return true;
    }
  }
  return false;
}
