//From 1137 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
  let sequence = [0, 1, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1] + sequence[i]);
  }
  return sequence[n];
}
