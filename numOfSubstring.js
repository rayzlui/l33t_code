//From 1358 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function numberOfSubstrings(s) {
  let result = 0;
  for (let i = 0; i < s.length - 2; i++) {
    let countA = 0;
    let countB = 0;
    let countC = 0;
    for (let j = i; j < s.length; j++) {
      let current = s[j];
      if (current === 'a') {
        countA++;
      }
      if (current === 'b') {
        countB++;
      }
      if (current === 'c') {
        countC++;
      }
      if (countA > 0 && countB > 0 && countC > 0) {
        result += s.length - j;
        break;
      }
    }
  }
  return result;
}
