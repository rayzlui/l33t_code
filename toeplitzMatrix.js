//From 766 in LeetCode

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function isToeplitzMatrix(matrix) {
  let longer =
    matrix.length < matrix[0].length ? matrix[0].length : matrix.length;

  for (let i = 0; i < longer; i++) {
    let rowBound = [];
    let columnBound = [];
    for (let j = 0; j < longer; j++) {
      if (i + j < matrix.length && j < matrix[0].length) {
        columnBound.push(matrix[i + j][j]);
      }
      if (j < matrix.length && i + j < matrix[0].length) {
        rowBound.push(matrix[j][i + j]);
      }
    }

    if (!rowBound.every(x => x === rowBound[0])) {
      return false;
    }

    if (!columnBound.every(x => x === columnBound[0])) {
      return false;
    }
  }

  return true;
};
