//From 1329 in LeetCode

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
function diagonalSort(mat) {
  function recursion(current, coordinates) {
    coordinates.push(current);
    if (current[0] === mat.length - 1 || current[1] === mat[0].length - 1) {
      let values = coordinates.map(x => mat[x[0]][x[1]]);
      let sort = values.sort((x, y) => x - y);
      coordinates.forEach((x, index) => (mat[x[0]][x[1]] = sort[index]));
      return;
    }
    recursion(current.map(x => x + 1), coordinates);
  }
  recursion([0, 0], []);
  for (let i = 1; i < mat[0].length; i++) {
    recursion([0, i], []);
  }
  for (let i = 1; i < mat.length; i++) {
    recursion([i, 0], []);
  }
  return mat;
}
