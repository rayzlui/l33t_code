//From Sept Challenge 3 from LeetCode

/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
  let split = 1;
  while (split <= s.length / 2) {
    let start = s.substring(0, split);
    let remove = s.split(start);
    if (remove.join('').trim() === '') {
      return true;
    }
    split++;
  }
  return false;
}
