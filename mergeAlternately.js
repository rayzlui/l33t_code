//From 1768 in LeetCode

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
  let result = '';
  let i = 0;
  for (; i < word1.length; i++) {
    result += word1[i] + word2[i];
    if (i === word2.length - 1) {
      return result + word1.substring(i + 1);
    }
  }
  return result + word2.substring(i);
}
