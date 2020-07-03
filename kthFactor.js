//From 1492 in LeetCode

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function kthFactor(n, k) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
    if (factors.length === k) {
      return i;
    }
  }
  return -1;
}
