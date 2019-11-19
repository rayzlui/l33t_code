//From 1252 in LeetCode

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
function oddCells(n, m, indices) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = new Array(m).fill(0);
    matrix.push(row);
  }
  for (let j = 0; j < indices.length; j++) {
    let coordinates = indices[j];
    let nIsh = coordinates[0];
    let mIsh = coordinates[1];
    for (let i = 0; i < m; i++) {
      matrix[nIsh][i]++;
    }
    for (let i = 0; i < n; i++) {
      matrix[i][mIsh]++;
    }
  }
  return matrix.reduce((acc, curr) => {
    let odds = curr.filter(x => x % 2 === 1).length;
    acc = acc + odds;
    return acc;
  }, 0);
}
