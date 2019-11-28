//From 48 in LeetCode

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  //rotate 1 value at time start corners, do 4 times for each side, then move on loop for matrix.length - 1 because the last one in row was swapped with first, after thats done, we go into [1,1] do the same and do until matrix.length/2
  for (let i = 0; i < matrix.length / 2; i++) {
    let start = i;
    let distance = matrix.length - 1 - i;
    for (let j = i; j < distance; j++) {
      //this goes across the row we're in
      let hold;
      let mover;
      for (let k = 0; k < 4; k++) {
        if (k === 0) {
          mover = matrix[i][j];
          hold = matrix[j][distance];

          matrix[j][distance] = mover;
        }
        if (k === 1) {
          mover = hold;
          hold = matrix[distance][matrix.length - 1 - j];
          matrix[distance][matrix.length - 1 - j] = mover;
        }
        if (k === 2) {
          mover = hold;
          hold = matrix[matrix.length - 1 - j][i];
          matrix[matrix.length - 1 - j][i] = mover;
        }
        if (k === 3) {
          mover = hold;
          matrix[i][j] = mover;
        }
      }
    }
  }
  return matrix;
}
