//From 1680 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function concatenatedBinary(n) {
  let num = 1;
  const MOD = 10 ** 9 + 7;
  for (let i = 2; i <= n; i++) {
    let shift = i.toString(2).length;
    num = (num * 2 ** shift + i) % MOD;
  }

  return num;
}
