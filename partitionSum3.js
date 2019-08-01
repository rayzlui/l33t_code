//From 1013 in LeetCode

/**
 * @param {number[]} A
 * @return {boolean}
 */
function canThreePartsEqualSum(A) {
  let sum = A.reduce((x, y) => x + y, 0);
  if (sum % 3 !== 0) return false;
  let currentSum = 0;
  let partitions = 0;
  for (let i = 0; i < A.length; i++) {
    currentSum += A[i];
    if (currentSum === sum / 3) {
      partitions++;
      if (partitions === 2) {
        return true;
      }
      currentSum = 0;
    }
  }
  return false;
};
