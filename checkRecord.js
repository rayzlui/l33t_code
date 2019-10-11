//From 551 in LeetCode

/**
 * @param {string} s
 * @return {boolean}
 */
let checkRecord = function(s) {
  let A = 0;
  let L = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === 'A') {
      if (A === 1) {
        return false;
      } else {
        A++;
      }
      L = 0;
    } else if (char === 'L') {
      if (L === 2) {
        return false;
      } else {
        L++;
      }
    } else {
      L = 0;
    }
  }
  return true;
};
