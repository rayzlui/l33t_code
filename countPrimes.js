//From 204 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */

function isPrime(num) {
  let breakPoint = Math.sqrt(num);
  for (let i = 2; i <= breakPoint; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
function countPrimes(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
