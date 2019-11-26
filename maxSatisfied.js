//From 1052 in LeetCode

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
function maxSatisfied(customers, grumpy, X) {
  let sum = customers.reduce((acc, curr, index) => {
    if (index < X) {
      acc += curr;
    } else if (grumpy[index] === 0) {
      acc += curr;
    }
    return acc;
  }, 0);
  let max = sum;
  for (let i = 0; i < customers.length - X; i++) {
    if (grumpy[i] === 1) {
      sum -= customers[i];
    }
    if (grumpy[i + X] === 1) {
      sum += customers[i + X];
    }
    max = Math.max(sum, max);
  }
  return max;
}
