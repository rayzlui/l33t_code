//From 762 in LeetCode

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

function isPrime(num) {
  if (num === 2 || num === 3) return true;
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrimeSetBits(L, R) {
  let count = 0;
  for (let i = L; i <= R; i++) {
    let bit = i.toString(2);
    let sum = bit.split('').reduce((x, y) => x / 1 + y / 1, 0);
    if (isPrime(sum)) {
      count++;
    }
  }
  return count;
}
