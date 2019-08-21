//From 733 in LeetCode

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

function findAdjacents(coordinates) {}

function floodFill(image, sr, sc, newColor) {
  let switchColor = image[sr][sc];
  let queue = [[sr, sc]];
  for (let i = 0; i < queue.length; i++) {
    let current = queue[i];
    let row = current[1];
    let column = current[0];
    let leftRow = row - 1;
    let rightRow = row + 1;
    let topColumn = column - 1;
    let bottomColumn = column + 1;
    if (topColumn >= 0) {
      if (image[topColumn][row] === switchColor) {
        if (!queue.some(x => x[1] === row && x[0] === topColumn)) {
          queue.push([topColumn, row]);
        }
      }
    }
    if (bottomColumn < image.length) {
      if (image[bottomColumn][row] === switchColor) {
        if (!queue.some(x => x[1] === row && x[0] === bottomColumn)) {
          queue.push([bottomColumn, row]);
        }
      }
    }
    if (image[column][leftRow] === switchColor) {
      if (!queue.some(x => x[1] === leftRow && x[0] === column)) {
        queue.push([column, leftRow]);
      }
    }

    if (image[column][rightRow] === switchColor) {
      if (!queue.some(x => x[1] === rightRow && x[0] === column)) {
        queue.push([column, rightRow]);
      }
    }
  }
  for (let j = 0; j < queue.length; j++) {
    let coor = queue[j];
    image[coor[0]][coor[1]] = newColor;
  }
  return image;
}
