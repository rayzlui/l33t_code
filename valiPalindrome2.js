//From 680 in LeetCode

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - (1 + i)]) {
      let front = s.substring(i + 1, s.length - i);
      let back = s.substring(i, s.length - (1 + i));
      if (
        front ===
          front
            .split('')
            .reverse()
            .join('') ||
        back ===
          back
            .split('')
            .reverse()
            .join('')
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  return true;
}
