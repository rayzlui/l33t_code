//From 977 in LeetCode

/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortedSquares(A) {
  return A.map(x => x * x).sort((x, y) => x - y);
}
