//From 463 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let sides = 4;
      if (grid[i][j] === 1) {
        if (i + 1 < grid.length) {
          if (grid[i + 1][j] === 1) {
            sides -= 1;
          }
        }
        if (i - 1 >= 0) {
          if (grid[i - 1][j] === 1) {
            sides -= 1;
          }
        }
        if (j - 1 >= 0) {
          if (grid[i][j - 1] === 1) {
            sides -= 1;
          }
        }
        if (j + 1 < grid[0].length) {
          if (grid[i][j + 1] === 1) {
            sides -= 1;
          }
        }
      } else {
        sides = 0;
      }
      perimeter += sides;
    }
  }
  return perimeter;
}
