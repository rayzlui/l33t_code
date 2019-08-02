//From LeetCode 896

/**
 * @param {number[]} A
 * @return {boolean}
 */
function isMonotonic(A) {
  let increasing = null;
  for (let i = 0; i < A.length; i++) {
    if (increasing === null) {
      if (A[i] > A[i + 1]) {
        increasing = false;
      }
      if (A[i] < A[i + 1]) {
        increasing = true;
      }
    } else {
      if (increasing) {
        if (A[i] > A[i + 1]) {
          return false;
        }
      } else {
        if (A[i] < A[i + 1]) {
          return false;
        }
      }
    }
  }
  return true;
};
