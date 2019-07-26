//From 883 in LeetCode
/**
 * @param {number[][]} grid
 * @return {number}
 */
function projectionArea(grid) {
  let x = grid.reduce((acc, current) => {
    let bottom = 0;
    for (let i = 0; i < current.length; i++) {
      if (current[i] > 0) {
        bottom++;
      }
    }
    return bottom + acc;
  }, 0);
  let y = grid.reduce((acc, current) => {
    return acc + Math.max(...current);
  }, 0);
  let z = 0;
  for (let i = 0; i < grid[0].length; i++) {
    let greatest = 0;
    for (let j = 0; j < grid.length; j++) {
      greatest = Math.max(greatest, grid[j][i]);
    }
    z += greatest;
  }
  return x + y + z;
}
