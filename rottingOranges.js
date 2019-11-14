//From 994 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number}
 */
function getAdjacents(i, j) {
  return [[i - 1, j], [i, j - 1], [i, j + 1], [i + 1, j]];
}
function orangesRotting(grid) {
  let days = 0;
  if (grid.every(row => row.every(box => box !== 1))) {
    return 0;
  }
  if (
    grid.some((row, a) =>
      row.some((box, b) => {
        if (box === 1) {
          let adjacents = getAdjacents(a, b);
          return adjacents.every(xy => {
            let x = xy[0];
            let y = xy[1];
            if (x >= 0 && x < grid.length && y >= 0 && y < row.length) {
              return grid[x][y] === 0;
            } else {
              return true;
            }
          });
        } else {
          return false;
        }
      }),
    ) ||
    grid.every(row => row.every(box => box !== 2))
  ) {
    return -1;
  }

  while (grid.some(box => box.some(x => x === 1))) {
    let copyGrid = grid.map(row => row.slice());
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
        let box = row[j];
        if (box === 2) {
          let adjacents = getAdjacents(i, j);
          adjacents.forEach(xy => {
            let x = xy[0];
            let y = xy[1];
            if (x >= 0 && x < grid.length && y >= 0 && y < row.length) {
              if (grid[x][y] === 1) {
                copyGrid[x][y] = 2;
              }
            }
          });
        }
      }
    }
    grid = copyGrid;
    days++;
    if (days > 100) {
      return -1;
    }
  }
  return days;
}

//cleaner

/**
 * @param {number[][]} grid
 * @return {number}
 */

function orangesRottingCleaner(grid) {
  let days = 0;

  while (grid.some(box => box.some(x => x === 1))) {
    let changed = false;
    let copyGrid = grid.map(row => row.slice());
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
        let box = row[j];
        if (box === 2) {
          let adjacents = getAdjacents(i, j);
          adjacents.forEach(xy => {
            let x = xy[0];
            let y = xy[1];
            if (x >= 0 && x < grid.length && y >= 0 && y < row.length) {
              if (grid[x][y] === 1) {
                changed = true;
                copyGrid[x][y] = 2;
              }
            }
          });
        }
      }
    }
    grid = copyGrid;
    days++;
    if (!changed) {
      return -1;
    }
  }
  return days;
}
