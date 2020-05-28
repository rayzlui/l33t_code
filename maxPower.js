//From 1446 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function maxPower(s) {
  let max = 1;
  let current = 1;
  let previous = s[0];
  for (let i = 1; i < s.length; i++) {
    if (previous === s[i]) {
      current++;
    } else {
      max = Math.max(current, max);
      current = 1;
      previous = s[i];
    }
  }
  return Math.max(max, current);
}
