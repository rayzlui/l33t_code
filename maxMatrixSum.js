//From 1975 in LeetCode

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function maxMatrixSum(matrix) {
  let sum = 0;
  let numNegs = 0;
  let lowestNum = Infinity;
  let hasZero = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let val = matrix[i][j];
      sum += Math.abs(val);
      lowestNum = Math.min(lowestNum, Math.abs(val));
      if (val < 0) {
        numNegs++;
      }
      if (val === 0) {
        hasZero = true;
      }
    }
  }
  if (numNegs % 2 === 0 || hasZero) {
    return sum;
  } else {
    return sum - lowestNum * 2;
  }
}
