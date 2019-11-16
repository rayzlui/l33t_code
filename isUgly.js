//From 263 in LeetCode

/**
 * @param {number} num
 * @return {boolean}
 */

function isPrime(num) {
  if (num !== Math.floor(num)) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimesTil(num) {
  let primes = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    let otherSide = num / i;
    if (isPrime(i)) {
      if (otherSide === Math.floor(otherSide)) {
        primes.push(i);
      }
    }
    if (isPrime(otherSide)) {
      if (otherSide === Math.floor(otherSide)) {
        primes.push(otherSide);
      }
    }
    if (primes.length > 4) {
      return false;
    }
  }
  return primes;
}

function isUgly(num) {
  if (num <= 0) {
    return false;
  }
  let shouldBe = [1, 2, 3, 5];
  let primes = getPrimesTil(num);
  if (primes === false) {
    return false;
  }
  return primes.every(prime => shouldBe.includes(prime));
}
