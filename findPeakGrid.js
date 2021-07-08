//From 1901 in LeetCode

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function findPeakGrid(mat) {
  let left = 0;
  let right = mat[0].length;
  let max;
  let index;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    max = -1;
    index = -1;
    for (let i = 0; i < mat.length; i++) {
      let val = mat[i][mid];
      if (val > max) {
        index = i;
        max = val;
      }
    }
    let rightCheck = mat[index][mid + 1] || -1;
    let leftCheck = mat[index][mid - 1] || -1;
    if (leftCheck < max && rightCheck < max) {
      return [index, mid];
    } else if (leftCheck > max) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return [index, left];
}
