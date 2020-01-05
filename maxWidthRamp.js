//From 962 in LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
function maxWidthRamp(A) {
  let max = 0;
  A = A.map((x, index) => [x, index]);
  A = A.sort((x, y) => {
    if (x[0] === y[0]) {
      return x[1] - y[1];
    } else {
      return x[0] - y[0];
    }
  });
  let min = Infinity;

  for (let i = 0; i < A.length; i++) {
    max = Math.max(max, A[i][1] - min);
    min = Math.min(min, A[i][1]);
  }
  return max;
}
