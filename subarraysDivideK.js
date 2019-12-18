//From 974 in LeetCode

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function subarraysDivByK(A, K) {
  let sums = [0];
  for (let i = 0; i < A.length; i++) {
    sums.push((((sums[i] + A[i]) % K) + K) % K);
  }
  let count = sums.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  return Object.values(count)
    .map(x => (x * (x - 1)) / 2)
    .reduce((acc, curr) => acc + curr);
}
