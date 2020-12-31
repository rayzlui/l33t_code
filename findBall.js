//From 1706 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
function findBall(grid) {
  let result = [];
  let length = grid[0].length;
  let depth = grid.length;
  function recursion(x, y) {
    if (x === depth) {
      return y;
    }
    if (y < 0 || y > length) {
      return -1;
    }
    let currentGrid = grid[x][y];

    if (currentGrid === 1) {
      if (grid[x][y + 1] === 1) {
        return recursion(x + 1, y + 1);
      } else {
        return -1;
      }
    } else {
      if (grid[x][y - 1] === -1) {
        return recursion(x + 1, y - 1);
      } else {
        return -1;
      }
    }
  }
  for (let i = 0; i < length; i++) {
    let coord = recursion(0, i);
    result.push(coord);
  }
  return result;
}
