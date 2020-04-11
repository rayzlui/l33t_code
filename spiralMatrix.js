//From 54 in LeetCode

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  let result = [...matrix[0]];
  let adding = true;
  let horizontial = false;
  let moves = 1;
  let y = matrix[0].length - 1;
  let x = 0;
  let flip = 1;
  while (result.length !== matrix.length * matrix[0].length) {
    let move = horizontial ? matrix[0].length : matrix.length;
    for (let i = 1; i <= move - moves; i++) {
      if (adding && horizontial) {
        y = y + 1;
      } else if (adding && !horizontial) {
        x = x + 1;
      } else if (!adding && !horizontial) {
        x = x - 1;
      } else {
        y = y - 1;
      }
      result.push(matrix[x][y]);
    }
    horizontial = !horizontial;
    if (flip == 1) {
      adding = !adding;
    } else {
      moves++;
    }
    flip = (flip + 1) % 2;
  }
  return result;
}
