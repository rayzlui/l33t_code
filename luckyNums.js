//From 1380 in LeetCode

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function luckyNumbers(matrix) {
  let luckyNums = [];
  for (let i = 0; i < matrix.length; i++) {
    let current = matrix[i];
    let min = Math.min(...current);
    let index = current.indexOf(min);
    let isMax = true;
    for (let j = 0; j < matrix.length; j++) {
      let num = matrix[j][index];
      if (num > min) {
        isMax = false;
        break;
      }
    }
    if (isMax) {
      luckyNums.push(min);
    }
  }
  return luckyNums;
}
