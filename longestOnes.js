//From 1004 in LeetCode

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function longestOnes(A, K) {
  let max = 0;
  let nextStart;
  let flipsRemaining = K;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    let current = A[i];
    if (current === 0) {
      if (nextStart === undefined) {
        nextStart = i;
      }
      if (flipsRemaining === 0) {
        max = Math.max(max, sum);
        flipsRemaining = K;
        sum = 0;
        i = nextStart;
        nextStart = undefined;
      } else {
        sum++;
        flipsRemaining--;
      }
    } else {
      sum++;
    }
  }
  max = Math.max(sum, max);
  return max;
}
