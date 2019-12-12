//From 646 in LeetCode

/**
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
  let result = 0;
  let previous = -Infinity;
  pairs = pairs.sort((x, y) => x[1] - y[1]);
  for (let i = 0; i < pairs.length; i++) {
    if (previous < pairs[i][0]) {
      previous = pairs[i][1];
      result++;
    }
  }
  return result;
}
