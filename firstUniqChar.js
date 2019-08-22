//From 387 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];
    if (s.lastIndexOf(currentLetter) === s.indexOf(currentLetter)) {
      return i;
    }
  }
  return -1;
}
