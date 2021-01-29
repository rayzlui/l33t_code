//From 1738 in LeetCode

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthLargestValue(matrix, k) {
  let dp = new Array(matrix.length);

  let kSize = [];
  dp[0] = matrix[0].reduce((acc, curr, index) => {
    let value;
    if (index === 0) {
      value = curr;
    } else {
      value = curr ^ acc[index - 1];
    }
    acc.push(value);
    kSize.push(value);
    return acc;
  }, []);
  for (let i = 1; i < matrix.length; i++) {
    let row = matrix[i];
    let dpRow = dp[i - 1];
    let rowVal = 0;
    dp[i] = row.reduce((acc, curr, index) => {
      let value;
      if (index === 0) {
        value = curr ^ dpRow[index];
      } else {
        value = curr ^ dpRow[index] ^ rowVal;
      }
      acc.push(value);
      rowVal = rowVal ^ curr;
      kSize.push(value);
      return acc;
    }, []);
  }
  kSize.sort((a, b) => b - a);
  return kSize[k - 1];
}
