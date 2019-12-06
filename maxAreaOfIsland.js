//From 695 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  //dfs recursion, if recursive(up, down, left, right), stop if 0 because no longer island "connected"
  let max = 0;
  if (grid.length === 1 && grid[0].length === 1) {
    return grid[0][0];
  }
  let visited = {};
  for (let i = 0; i < grid.length; i++) {
    let currentRow = grid[i];
    for (let j = 0; j < currentRow.length; j++) {
      if (visited[i + '+' + j] === undefined) {
        function recursion(row, column, sum) {
          let currentGrid = grid[row][column];
          visited[row + '+' + column] = true;
          if (currentGrid === 0) {
            max = Math.max(max, sum);
            return sum;
          }
          sum++;
          if (
            row + 1 < grid.length &&
            visited[row + 1 + '+' + column] === undefined
          ) {
            visited[row + 1 + '+' + column] = true;
            sum = recursion(row + 1, column, sum);
          }
          if (row - 1 >= 0 && visited[row - 1 + '+' + column] === undefined) {
            visited[row - 1 + '+' + column] = true;
            sum = recursion(row - 1, column, sum);
          }
          if (
            column + 1 < currentRow.length &&
            visited[row + '+' + (column + 1)] === undefined
          ) {
            visited[row + '+' + (column + 1)] = true;
            sum = recursion(row, column + 1, sum);
          }
          if (
            column - 1 >= 0 &&
            visited[row + '+' + (column - 1)] === undefined
          ) {
            visited[row + '+' + (column - 1)] = true;
            sum = recursion(row, column - 1, sum);
          }
          max = Math.max(sum, max);
          return sum;
        }
        recursion(i, j, 0, {});
      }
    }
  }
  return max;
}
