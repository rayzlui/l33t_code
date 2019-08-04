//From 961 in LeetCode

/**
 * @param {number[]} A
 * @return {number}
 */
function repeatedNTimes(A) {
  const sorted = A.sort((x, y) => x - y);
  for (let i = sorted.length / 2; i >= 0; i--) {
    if (sorted[i] === sorted[i - 1] || sorted[i] == sorted[i + 1]) {
      return sorted[i];
    }
  }
}
