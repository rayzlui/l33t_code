//From 986 in LeetCode

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
function intervalIntersection(A, B) {
  let trackA = 0;
  let trackB = 0;
  let result = [];
  while (trackA < A.length && trackB < B.length) {
    let higherMin = Math.max(A[trackA][0], B[trackB][0]);
    let lowerMax = Math.min(A[trackA][1], B[trackB][1]);
    if (higherMin <= lowerMax) {
      result.push([higherMin, lowerMax]);
    }
    if (A[trackA][1] < B[trackB][1]) {
      trackA++;
    } else {
      trackB++;
    }
  }
  return result;
}
