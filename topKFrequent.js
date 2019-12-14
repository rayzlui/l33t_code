//From 692 in LeetCode

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
  let count = words.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let keys = Object.keys(count);
  let kWords = keys.sort((x, y) => {
    if (count[y] === count[x]) {
      return x.localeCompare(y);
    } else {
      return count[y] - count[x];
    }
  });
  return kWords.slice(0, k);
}
