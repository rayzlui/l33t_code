//From 73 in LeetCode

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  let zeroedColumn = {};
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let hasZero = false;
    let zeroes = row.forEach((curr, index) => {
      if (curr === 0) {
        zeroedColumn[index] = true;
        hasZero = true;
      }
    });
    if (hasZero) {
      matrix[i] = new Array(matrix[i].length).fill(0);
    }
  }
  Object.keys(zeroedColumn).forEach(x => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][x] = 0;
    }
  });
  return matrix;
}

//better memory

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroesII(matrix) {
  let zeroedColumn = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let hasZero = false;
    let zeroes = row.forEach((curr, index) => {
      if (curr === 0) {
        zeroedColumn.push(index);
        hasZero = true;
      }
    });
    if (hasZero) {
      matrix[i] = new Array(matrix[i].length).fill(0);
    }
  }
  zeroedColumn.forEach(x => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][x] = 0;
    }
  });
  return matrix;
}
