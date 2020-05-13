//From 396 in LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
function maxRotateFunction(A) {
  //notice during rotation you're essentially adding 1 more of each num of the previous iteration and subtracting an A[i] * the length.
  if (A.length < 2) {
    return 0;
  }
  let sum = A.reduce((acc, curr) => acc + curr);
  let currentRotate = A.reduce((acc, curr, index) => acc + curr * index, 0);
  let max = currentRotate;
  for (let i = A.length - 1; i > 0; i--) {
    currentRotate += sum - A[i] * A.length;
    max = Math.max(max, currentRotate);
  }
  return max;
}
