//From 1337 in LeetCode

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
function kWeakestRows(mat, k) {
  let holder = {};
  for (let i = 0; i < mat.length; i++) {
    let row = mat[i];
    let j = 0;
    while (mat[i][j] === 1) {
      j++;
    }
    if (holder[j]) {
      holder[j].push(i);
    } else {
      holder[j] = [i];
    }
  }
  let result = [];
  let keys = Object.keys(holder);
  let i = 0;
  while (result.length < k) {
    result = result.concat(holder[keys[i]]);
    i++;
  }
  return result.slice(0, k);
}
