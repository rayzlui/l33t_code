//From 1961 in LeetCode

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
function isPrefixString(s, words) {
  let concat = '';
  let j = 0;
  while (concat.length < s.length) {
    let nextWord = words[j];
    concat += nextWord;
    j++;
  }
  if (concat === s) {
    return true;
  }
  return false;
}
