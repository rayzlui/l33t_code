//From 1175 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function numPrimeArrangements(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  let primes = -1;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      primes++;
    }
  }
  let nonPrimes = n - primes;
  let result = 1;
  for (let i = 1; i <= primes; i++) {
    result = (result * i) % (10 ** 9 + 7);
  }
  for (let i = 1; i <= nonPrimes; i++) {
    result = (result * i) % (10 ** 9 + 7);
  }
  return result;
}
