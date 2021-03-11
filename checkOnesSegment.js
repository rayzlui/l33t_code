//From 1784 in LeetCode

/**
 * @param {string} s
 * @return {boolean}
 */
function checkOnesSegment(s) {
  let zero = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      zero = true;
    } else {
      if (zero) {
        return false;
      }
    }
  }
  return true;
}
