//From 1072 in LeetCode

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function maxEqualRowsAfterFlips(matrix) {
  let holder = {};
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let storeA = '';
    let storeB = '';
    for (let j = 0; j < row.length; j++) {
      let curr = row[j];
      if (curr === 1) {
        storeA += 'a';
        storeB += 'b';
      } else {
        storeA += 'b';
        storeB += 'a';
      }
    }
    if (holder[storeA]) {
      holder[storeA]++;
    } else {
      holder[storeA] = 1;
    }
    if (holder[storeB]) {
      holder[storeB]++;
    } else {
      holder[storeB] = 1;
    }
    max = Math.max(max, holder[storeA], holder[storeB]);
  }
  return max;
}
