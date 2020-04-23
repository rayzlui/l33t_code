//From 151 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  s = s
    .trim()
    .split(' ')
    .filter(x => x)
    .reverse();
  return s.join(' ');
}
