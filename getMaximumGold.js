//From 1219 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number}
 */
function getMaximumGold(grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    let currentRow = grid[i];
    for (let j = 0; j < currentRow.length; j++) {
      //need to track visited
      function recursion(row, column, sum, visited) {
        //visited needs to be new OBJECT EACH TIME
        let currentGrid = grid[row][column];
        let copyCopyVisted = Object.assign({}, visited);
        copyCopyVisted[row + '+' + column] = true;
        if (currentGrid === 0) {
          max = Math.max(max, sum);
          return;
        }
        sum += currentGrid;
        if (
          row + 1 < grid.length &&
          visited[row + 1 + '+' + column] === undefined
        ) {
          let copyVisited = Object.assign({}, copyCopyVisted);
          copyVisited[row + 1 + '+' + column] = true;
          recursion(row + 1, column, sum, copyVisited);
        }
        if (row - 1 >= 0 && visited[row - 1 + '+' + column] === undefined) {
          let copyVisited = Object.assign({}, copyCopyVisted);
          copyVisited[row - 1 + '+' + column] = true;
          recursion(row - 1, column, sum, copyVisited);
        }
        if (
          column + 1 < currentRow.length &&
          visited[row + '+' + (column + 1)] === undefined
        ) {
          let copyVisited = Object.assign({}, copyCopyVisted);
          copyVisited[row + '+' + (column + 1)] = true;
          recursion(row, column + 1, sum, copyVisited);
        }
        if (
          column - 1 >= 0 &&
          visited[row + '+' + (column - 1)] === undefined
        ) {
          let copyVisited = Object.assign({}, copyCopyVisted);
          copyVisited[row + '+' + (column - 1)] = true;
          recursion(row, column - 1, sum, copyVisited);
        }
        return;
      }
      recursion(i, j, 0, {});
    }
  }
  return max;
}
