//From 1031 in Leetcode

/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
function maxSumTwoNoOverlap(A, L, M) {
  let sums = [0];
  for (let i = 0; i < A.length; i++) {
    sums.push(sums[sums.length - 1] + A[i]);
  }
  let max = 0;
  for (let i = 0; i < sums.length - L; i++) {
    let valueL = sums[i + L] - sums[i];
    for (let j = i - 1; j - M >= 0; j--) {
      let valueM = sums[j] - sums[j - M];
      max = Math.max(valueM + valueL, max);
    }
    for (let k = i + L; k + M < sums.length; k++) {
      let valueM = sums[k + M] - sums[k];
      max = Math.max(valueM + valueL, max);
    }
  }
  return max;
}
