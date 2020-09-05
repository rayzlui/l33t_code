//From 1557 from LeetCode

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findSmallestSetOfVertices(n, edges) {
  let tracker = edges.reduce(
    (acc, curr) => {
      let start = curr[0];
      let end = curr[1];
      if (acc[0][start]) {
        acc[0][start].push(end);
      } else {
        acc[0][start] = [end];
      }
      if (acc[1][end]) {
        acc[1][end].push(start);
      } else {
        acc[1][end] = [start];
      }
      return acc;
    },
    [{}, {}],
  );
  let starts = Object.keys(tracker[0]);
  let ends = tracker[1];
  let result = [];
  for (let i = 0; i < starts.length; i++) {
    let current = starts[i];
    if (!ends[current]) {
      result.push(current);
    }
  }
  return result;
}