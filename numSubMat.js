//From 1504 in LeetCode

/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSubmat(mat) {
  let count = 0;
  for (let i = 0; i < mat.length; i++) {
    let row = mat[i];
    for (let j = 0; j < row.length; j++) {
      let elem = row[j];
      if (elem === 1) {
        count++;
        let k = j + 1;
        for (; k < row.length; k++) {
          let add = row[k];
          if (add === 1) {
            count++;
          } else {
            break;
          }
        }
        let l = i + 1;
        for (; l < mat.length; l++) {
          if (mat[l][j] === 1) {
            count++;
          } else {
            break;
          }
        }
        for (let m = i + 1; m < l; m++) {
          for (let n = j + 1; n < k; n++) {
            if (mat[m][n] === 1) {
              count++;
            } else {
              k = n;
              break;
            }
          }
        }
      }
    }
  }
  return count;
}
