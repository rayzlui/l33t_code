//From 74 in LeetCode

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let currentRow = matrix[i];
    if (currentRow[currentRow.length - 1] >= target) {
      return currentRow.includes(target);
    }
  }
  return false;
}
