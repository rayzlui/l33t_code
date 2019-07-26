//From 944 in LeetCode

/**
 * @param {string[]} A
 * @return {number}
 */
function minDeletionSize(A) {
  let remove = [];
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j][i] > A[j + 1][i]) {
        remove.push(i);
        break;
      }
    }
  }
  return remove.length;
}
