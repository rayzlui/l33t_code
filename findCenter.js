//From 1791 in LeetCode

/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
  let count = {};
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    let first = edge[0];
    let second = edge[1];
    count[first] = count[first] + 1 || 1;
    count[second] = count[second] + 1 || 1;
    if (count[first] > 1) {
      return first;
    }
    if (count[second] > 1) {
      return second;
    }
  }
}
