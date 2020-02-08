//From 1332 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub(s) {
  if (s.length === 0) {
    return 0;
  }
  return s ===
    s
      .split('')
      .reverse()
      .join('')
    ? 1
    : 2;
}
