//From 318 in LeetCode

/**
 * @param {string[]} words
 * @return {number}
 */

function wordCheck(word1, word2) {
  for (let i = 0; i < word2.length; i++) {
    if (word1.indexOf(word2[i]) !== -1) {
      return false;
    }
  }
  return true;
}
function maxProduct(words) {
  words = words.sort((x, y) => y.length - x.length);
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    if (current.length ** 2 < max) {
      return max;
    }
    for (let j = i + 1; j < words.length; j++) {
      let compare = words[j];
      if (wordCheck(current, compare)) {
        max = Math.max(max, current.length * compare.length);
      }
    }
  }
  return max;
}
