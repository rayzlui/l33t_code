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

//faster

/**
 * @param {number} n
 * @return {number}
 */
function binaryUpTo(n) {
  let result = {};
  let start = 1;
  while (start < n) {
    result[start] = true;
    start *= 2;
  }
  return result;
}

const binariesUpTo100000 = binaryUpTo(100000);
function concatenatedBinaryII(n) {
  let num = 1;
  const MOD = 10 ** 9 + 7;
  let binaryLength = 1;
  for (let i = 2; i <= n; i++) {
    if (binariesUpTo100000[i]) {
      binaryLength++;
    }
    num = (num * 2 ** binaryLength + i) % MOD;
  }

  return num;
}
