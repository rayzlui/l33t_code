//From 1572 in LeetCode

/**
 * @param {number[][]} mat
 * @return {number}
 */
function diagonalSum(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length / 2; i++) {
    let frontRow = i;
    let backRow = mat.length - 1 - i;
    sum += mat[frontRow][frontRow];
    if (frontRow === backRow) {
      break;
    }
    sum +=
      mat[backRow][frontRow] + mat[backRow][backRow] + mat[frontRow][backRow];
  }
  return sum;
}
