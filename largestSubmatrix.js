//From 1727 in LeetCode

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function largestSubmatrix(matrix) {
  let result = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 1; j < matrix.length; j++) {
      let grid = matrix[j][i];
      let previous = matrix[j - 1][i];
      if (previous && grid) {
        matrix[j][i] = previous + 1;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    row.sort((x, y) => y - x);
    for (let j = 0; j < row.length; j++) {
      result = Math.max(result, (j + 1) * row[j]);
    }
  }
  return result;
}
