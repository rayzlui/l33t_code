//From 1551 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function minOperations(n) {
  let result = 0;
  let start = 1;
  let i = 1;
  while (i <= n / 2) {
    result += start;
    start += 2;
    i++;
  }
  if (n % 2 === 1) {
    result += Math.floor(n / 2);
  }
  return result;
}
