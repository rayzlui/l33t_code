//From 1605 in LeetCode

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
function restoreMatrix(rowSum, colSum) {
  let result = [];
  for (let i = 0; i < rowSum.length; i++) {
    let row = [];
    let rowVal = rowSum[i];
    for (let j = 0; j < colSum.length; j++) {
      let colVal = colSum[j];
      if (rowVal < colVal) {
        row.push(rowVal);
        colSum[j] -= rowVal;
        rowVal -= rowVal;
      } else {
        row.push(colVal);
        colSum[j] -= colVal;
        rowVal -= colVal;
      }
    }
    result.push(row);
  }
  return result;
}
