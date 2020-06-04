//From 1439 in LeetCode

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
function kthSmallest(mat, k) {
  if (mat.length === 0) {
    return 0;
  }
  let rows = mat.length;
  let columns = mat[0].length;
  let sums = [0];
  for (let i = 0; i < rows; i++) {
    let addSums = [];
    for (let j = 0; j < sums.length; j++) {
      for (let m = 0; m < columns && m < k; m++) {
        let value = sums[j] + mat[i][m];
        if (addSums.length < k) {
          addSums.push(value);
        } else if (value < addSums[k - 1]) {
          addSums.pop();
          addSums.push(value);
        } else {
          break;
        }
        addSums.sort((x, y) => x - y);
      }
    }
    sums = addSums;
  }
  return sums[k - 1];
}
