//From 1281 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function subtractProductAndSum(n) {
  let sum = 0;
  let product = 1;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += n[i] / 1;
    product = (product * n[i]) / 1;
  }
  return product - sum;
}

//faster
function subtractProductAndSumII(n) {
  let array = n.toString().split('');
  let sum = array.reduce((acc, curr) => acc + curr / 1, 0);
  let product = array.reduce((acc, curr) => (acc * curr) / 1, 1);
  return product - sum;
}
