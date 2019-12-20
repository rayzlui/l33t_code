//From 1267 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number}
 */
function countServers(grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    let servers = row.filter(x => x === 1);
    if (servers.length > 1) {
      result += servers.length;
    }
    if (servers.length === 1) {
      let index = row.indexOf(1);
      for (let j = 0; j < grid.length; j++) {
        if (j !== i) {
          let column = grid[j][index];
          if (column === 1) {
            result++;
            break;
          }
        }
      }
    }
  }
  return result;
}
