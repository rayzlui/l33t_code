//From 598 in LeetCode

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */

function maxCount(m, n, ops) {
  if (ops.length === 0) {
    return m * n;
  }
  let minM = 500000;
  let minN = 500000;
  for (let i = 0; i < ops.length; i++) {
    let operation = ops[i];
    minM = Math.min(minM, operation[0]);
    minN = Math.min(minN, operation[1]);
  }
  return minM * minN;
}
