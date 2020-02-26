//From 1351 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number}
 */
function countNegatives(grid) {
  let length = grid[0].length;
  return grid.reduce((acc, curr) => {
    let index = curr.findIndex(x => x < 0);
    if (index >= 0) {
      acc += length - index;
    }
    return acc;
  }, 0);
}
