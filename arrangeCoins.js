//From 441 in leetcode

/**
 * @param {number} n
 * @return {number}
 */
function arrangeCoins(n) {
  let sum = 0;
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    if (sum <= n) {
      counter++;
    } else {
      break;
    }
  }
  return counter;
}
