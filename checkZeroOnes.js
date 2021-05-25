//From 1869 in LeetCode

/**
 * @param {string} s
 * @return {boolean}
 */
function checkZeroOnes(s) {
  let current = s[0];
  let ones = 0;
  let zeros = 0;
  let length = 1;
  for (let i = 1; i < s.length; i++) {
    let num = s[i];
    if (num === current) {
      length++;
      if (current === '1') {
        ones = Math.max(length, ones);
      } else {
        zeros = Math.max(length, zeros);
      }
    } else {
      if (current === '1') {
        ones = Math.max(length, ones);
      } else {
        zeros = Math.max(length, zeros);
      }
      current = num;
      length = 1;
    }
  }
  if (current === '1') {
    ones = Math.max(length, ones);
  } else {
    zeros = Math.max(length, zeros);
  }
  return ones > zeros;
}
