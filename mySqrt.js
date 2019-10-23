//From 69 in LeetCode

/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  return Math.floor(Math.sqrt(x));
}

/**
 * @param {number} x
 * @return {number}
 */
function mySqrt2(x) {
  let s = x.toString();
  let len = s.length;
  len = Math.floor(len / 2);
  let start = s.substring(0, len) / 2;
  start = Math.floor(start);
  for (let i = start; i <= x; i++) {
    if (i * i > x) {
      return i - 1;
    } else if (i * i === x) {
      return i;
    }
  }
}
