//From 1759 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */

const MOD = 10 ** 9 + 7;
function countHomogenous(s) {
  let result = 0;
  let cont = 0;
  for (let i = 0; i <= s.length; i++) {
    let current = s[i];
    let previous = s[i - 1];
    if (current === previous) {
      cont++;
    } else {
      result = (result + ((cont + 1) * cont) / 2) % MOD;
      cont = 1;
    }
  }
  return result;
}
