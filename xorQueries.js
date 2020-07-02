//From 1310 in LeetCode

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
function xorQueries(arr, queries) {
  return queries.map(x => {
    let xor = arr[x[0]];
    for (let i = x[0] + 1; i <= x[1]; i++) {
      xor = xor ^ arr[i];
    }
    return xor;
  });
}
