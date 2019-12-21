//From 861 in LeetCode

/**
 * @param {number[][]} A
 * @return {number}
 */
function matrixScore(A) {
  for (let i = 0; i < A.length; i++) {
    let current = A[i];
    if (current[0] === 0) {
      for (let j = 0; j < current.length; j++) {
        current[j] = current[j] === 1 ? 0 : 1;
      }
    }
  }
  for (let i = 1; i < A[0].length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j][i] === 0) {
        count++;
      }
    }
    if (count > A.length / 2) {
      for (let j = 0; j < A.length; j++) {
        A[j][i] = A[j][i] === 0 ? 1 : 0;
      }
    }
  }
  return A.reduce((acc, curr) => {
    acc = parseInt(curr.join(''), 2) + acc;
    return acc;
  }, 0);
}
