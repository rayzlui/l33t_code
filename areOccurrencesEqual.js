//From 1941 in LeetCode

/**
 * @param {string} s
 * @return {boolean}
 */
function areOccurrencesEqual(s) {
  let count = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    count[char] = count[char] + 1 || 1;
  }
  let num;
  for (let alphabet in count) {
    if (num) {
      if (num !== count[alphabet]) {
        return false;
      }
    } else {
      num = count[alphabet];
    }
  }
  return true;
}
