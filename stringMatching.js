//From 1408 in LeetCode

/**
 * @param {string[]} words
 * @return {string[]}
 */
function stringMatching(words) {
  return words.filter(x =>
    words.some(y => {
      if (y === x) {
        return false;
      }
      return y.includes(x);
    }),
  );
}
