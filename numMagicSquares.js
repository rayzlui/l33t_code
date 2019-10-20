//From 840 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number}
 */
function numMagicSquaresInside(grid) {
  if (grid.length < 3 || grid[0].length < 3) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[0].length - 2; j++) {
      let row1 = grid[i].slice(j, j + 3);
      let row2 = grid[i + 1].slice(j, j + 3);
      let row3 = grid[i + 2].slice(j, j + 3);
      if (
        row1.every(x => x <= 9) &&
        row2.every(x => x <= 9) &&
        row3.every(x => x <= 9) &&
        row1.every(x => x !== 5)
      ) {
        row1 = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
        row2 = grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2];
        row3 = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
        let column1 = grid[i][j] + grid[i + 1][j] + grid[i + 2][j];
        let column2 = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1];
        let column3 = grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2];
        let diagonal1 = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2];
        let diagonal2 = grid[i + 2][j] + grid[i + 1][j + 1] + grid[i][j + 2];

        if (
          [
            row1,
            row2,
            row3,
            column1,
            column2,
            column3,
            diagonal1,
            diagonal2,
          ].every(x => x === 15)
        ) {
          total++;
        }
      }
    }
  }
  return total;
}
