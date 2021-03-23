//From 1796 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function secondHighest(s) {
  let max = -1;
  let secondMax = -1;
  for (let i = 0; i < s.length; i++) {
    let val = s[i] / 1;
    if (val * 0 === 0) {
      if (val > max) {
        secondMax = max;
        max = val;
      } else if (val > secondMax && val !== max) {
        secondMax = val;
      }
    }
  }

  return secondMax;
}
