//From 852 of LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
function peakIndexInMountainArray(A) {
  let max = Math.max(...A);
  return A.indexOf(max);
};
