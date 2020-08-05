//From 1536 in LeetCode

/**
 * @param {number[][]} grid
 * @return {number}
 */
function minSwaps(grid) {
  let values = [];
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    row.reverse();
    let val = 0;
    let j = 0;
    while (row[j] === 0) {
      val++;
      j++;
    }
    values.push(val);
  }
  let first = grid.length - 1;
  while (first !== 0) {
    let index = values.findIndex(x => x >= first);
    if (index === -1) {
      return -1;
    }
    count += index;
    let num = values.splice(index, 1);
    first--;
  }
  return count;
}
