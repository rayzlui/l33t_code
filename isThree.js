//From 1952 in LeetCode

/**
 * @param {number} n
 * @return {boolean}
 */

function isThree(n) {
  let primes = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
  ].reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  let sqrt = Math.sqrt(n);
  if (primes[sqrt]) {
    return true;
  }
  return false;
}
