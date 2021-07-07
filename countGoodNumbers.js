//From 1922 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function countGoodNumbers(n) {
  const MOD = BigInt(10 ** 9 + 7);
  function modPower(base, exp) {
    if (exp === 0) {
      return BigInt(1);
    }
    let carry = BigInt(1);
    while (exp > 1) {
      if (exp % 2 === 1) {
        carry = carry * base;
      }
      base = base ** BigInt(2) % MOD;
      exp = Math.floor(exp / 2);
    }
    return (base * carry) % MOD;
  }
  return (
    (modPower(BigInt(5), Math.floor((n + 1) / 2)) *
      modPower(BigInt(4), Math.floor(n / 2))) %
    MOD
  );
}
