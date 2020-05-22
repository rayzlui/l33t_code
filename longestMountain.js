//From 845 in LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
function longestMountain(A) {
  if (A.length === 0) {
    return 0;
  }
  let longest = 0;
  let left = 0;
  let middle = 0;
  let right = 0;
  while (right < A.length) {
    if (middle === left) {
      if (A[left + 1] > A[left]) {
        middle = left + 1;
        right = middle;
      } else {
        left++;
        right++;
        middle++;
      }
    } else if (right === middle) {
      if (A[middle + 1] < A[middle]) {
        right = middle + 1;
      } else if (A[middle + 1] > A[middle]) {
        middle++;
        right++;
      } else {
        left = middle + 1;
        right = left;
        middle = left;
      }
    } else {
      if (A[right] > A[right + 1]) {
        right++;
      } else {
        longest = Math.max(longest, right - (left - 1));
        left = right;
        right = left;
        middle = left;
      }
    }
  }
  if (left !== right && right !== middle && left !== middle) {
    longest = Math.max(longest, right - left);
  }
  return longest;
}
