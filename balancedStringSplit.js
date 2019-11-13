//From 1221 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
  let result = 0;
  let L = 0;
  let R = 0;
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current === 'R') {
      R++;
    }
    if (current === 'L') {
      L++;
    }
    if (R == L) {
      result++;
    }
  }
  if (R !== L) {
    return 0;
  } else {
    return result;
  }
}
