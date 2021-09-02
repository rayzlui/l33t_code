//From 1967 in LeetCode

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
function numOfStrings(patterns, word) {
  let result = 0;
  for (let i = 0; i < patterns.length; i++) {
    let current = patterns[i];
    if (word.includes(current)) {
      result++;
    }
  }
  return result;
}
