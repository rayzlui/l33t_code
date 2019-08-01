//From 892 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number}
 */
function surfaceArea(grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let currentSide = grid[i][j];
      if (currentSide !== 0) {
        result += 2;
        let topSide = j - 1 >= 0 ? grid[i][j - 1] : 0;
        let bottomSide = j + 1 < grid[i].length ? grid[i][j + 1] : 0;
        let leftSide = i - 1 >= 0 ? grid[i - 1][j] : 0;
        let rightSide = i + 1 < grid[i].length ? grid[i + 1][j] : 0;
        if (topSide === 0) {
          result += currentSide;
        } else {
          if (currentSide > topSide) {
            result += currentSide - topSide;
          }
        }
        if (bottomSide === 0) {
          result += currentSide;
        } else {
          if (currentSide > bottomSide) {
            result += currentSide - bottomSide;
          }
        }
        if (leftSide === 0) {
          result += currentSide;
        } else {
          if (currentSide > leftSide) {
            result += currentSide - leftSide;
          }
        }
        if (rightSide === 0) {
          result += currentSide;
        } else {
          if (currentSide > rightSide) {
            result += currentSide - rightSide;
          }
        }
      }
    }
  }
  return result;
}
