//From 1582 in LeetCode

/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSpecial(mat) {
  let columnIndex = {};
  let potentials = [];
  for (let i = 0; i < mat.length; i++) {
    let row = mat[i];
    let isOnlyElement = [];
    for (let j = 0; j < row.length; j++) {
      let element = row[j];
      if (element === 1) {
        isOnlyElement.push(j);
        if (columnIndex[j]) {
          columnIndex[j]++;
        } else {
          columnIndex[j] = 1;
        }
      }
    }
    if (isOnlyElement.length === 1) {
      potentials.push([i, isOnlyElement[0]]);
    }
  }

  return potentials.reduce((acc, [i, j]) => {
    if (columnIndex[j] === 1) {
      acc++;
    }
    return acc;
  }, 0);
}
