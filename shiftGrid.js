//From 1260 in LeetCode

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
function shiftGrid(grid, k) {
  let M = grid.length;
  let N = grid[0].length;
  let size = M * N;
  k = k % size;
  if (N === 1) {
    let breaker = k % M;
    let split = grid.splice(M - breaker);
    let result = split.concat(grid);
    return result;
  }
  if (k === size) {
    return grid;
  }
  if (k % N === 0) {
    let rowNum = M - k / N;
    let front = grid.splice(rowNum);
    let result = front.concat(grid);
    return result;
  }
  let rowsDown = grid.length - Math.floor(k / N) - 1;
  //this counts how many rows up from the bottom we'll need to go. by subtracting it, we can just use it from index
  let rowBreak = k % N;
  rowBreak = rowBreak === 0 ? N : rowBreak;
  //this counts how many elements we'll need to go into the row from the end
  let theRest = grid.splice(rowsDown + 1);

  let firstNewElement = grid[rowsDown].splice(N - rowBreak);

  let collapse2D = grid.reduce((acc, curr) => {
    acc = acc.concat(curr);
    return acc;
  }, firstNewElement.concat(...theRest));
  let result = [];
  let row = [];
  for (let i = 0; i < collapse2D.length; i++) {
    let current = collapse2D[i];
    row.push(current);
    if (row.length === N) {
      result.push(row);
      row = [];
    }
  }
  return result;
}
