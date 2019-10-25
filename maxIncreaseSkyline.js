//From 807 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxIncreaseKeepingSkyline(grid) {
  let sum = 0;
  let maxLR = grid.map(x => Math.max(...x));
  let maxBT = [];
  for (let i = 0; i < grid[0].length; i++) {
    let arr = grid.map(x => x[i]);
    let max = Math.max(...arr);
    maxBT.push(max);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let rowMax = maxLR[i];
      let columnMax = maxBT[j];
      let min = Math.min(rowMax, columnMax);
      let diff = min - grid[i][j];
      sum += diff;
    }
  }
  return sum;
}
