//From 1314 in LeetCode

/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
function matrixBlockSum(mat, K) {
  let result = [];
  let sizeX = mat.length;
  let sizeY = mat[0].length;
  for (let i = 0; i < sizeX; i++) {
    let row = [];
    for (let j = 0; j < sizeY; j++) {
      let edgeTop = i - K >= 0 ? i - K : 0;
      let edgeBottom = i + K < sizeX ? i + K : sizeX - 1;
      let edgeLeft = j - K >= 0 ? j - K : 0;
      let edgeRight = j + K < sizeY ? j + K : sizeY - 1;
      let sum = 0;
      for (let a = edgeTop; a <= edgeBottom; a++) {
        for (let b = edgeLeft; b <= edgeRight; b++) {
          sum += mat[a][b];
        }
      }
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}


//faster

/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
function matrixBlockSumII(mat, K) {
  let result = [];
  let sizeX = mat.length;
  let sizeY = mat[0].length;
  for (let i = 0; i < sizeX; i++) {
    let row = [];
    let edgeTop = i - K >= 0 ? i - K : 0;
    let edgeBottom = i + K < sizeX ? i + K : sizeX - 1;
    for (let j = 0; j < sizeY; j++) {
      let edgeLeft = j - K >= 0 ? j - K : 0;
      let edgeRight = j + K < sizeY ? j + K : sizeY - 1;
      if (row[j - 1] === undefined) {
        let sum = 0;
        for (let a = edgeTop; a <= edgeBottom; a++) {
          for (let b = edgeLeft; b <= edgeRight; b++) {
            sum += mat[a][b];
          }
        }
        row.push(sum);
      } else {
        let sum = row[j - 1];
        let left = j - K > 0;
        let right = j + K < sizeY;
        if (left) {
          for (let a = edgeTop; a <= edgeBottom; a++) {
            sum -= mat[a][j - K - 1];
          }
        }
        if (right) {
          for (let a = edgeTop; a <= edgeBottom; a++) {
            sum += mat[a][j + K];
          }
        }
        row.push(sum);
      }
    }
    result.push(row);
  }
  return result;
}
