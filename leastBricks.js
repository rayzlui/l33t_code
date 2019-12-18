//From 554 in LeetCode

/**
 * @param {number[][]} wall
 * @return {number}
 */
function leastBricks(wall) {
  //iterate over total width of wall,at the same time over each row, store the value for each row
  let holder = {};
  let bricksLanded = {};
  let brickNum = 0;
  let stillBricks = true;
  let width = wall[0].reduce((acc, curr) => acc + curr, 0);
  while (stillBricks) {
    let hasBricks = false;
    for (let i = 0; i < wall.length; i++) {
      let currentBrick = wall[i][brickNum];
      if (currentBrick) {
        if (holder[i]) {
          holder[i] += wall[i][brickNum];
        } else {
          holder[i] = wall[i][brickNum];
        }
        if (bricksLanded[holder[i]]) {
          bricksLanded[holder[i]]++;
        } else {
          bricksLanded[holder[i]] = 1;
        }
        hasBricks = true;
      }
    }
    brickNum++;
    if (!hasBricks) {
      stillBricks = false;
    }
  }
  bricksLanded[width] = 0;
  let values = Object.values(bricksLanded);
  let max = Math.max(...values);
  return wall.length - max;
}
