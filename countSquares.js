//From 1277 in LeetCode

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function countSquares(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 1) {
        count++;
        let k = j + 1;
        let l = i + 1;
        for (; k < row.length; k++) {
          if (row[k] === 0) {
            break;
          }
        }
        for (; l < matrix.length; l++) {
          if (matrix[l][j] === 0) {
            break;
          }
        }

        let m = j + 1;
        let n = i + 1;
        for (; n < l; n++) {
          m = j + 1;
          for (; m < k; m++) {
            if (matrix[n][m] === 0) {
              k = m;
              break;
            }
          }
          if (n - i < m - j) {
            count++;
          }
        }
      }
    }
  }
  return count;
}
