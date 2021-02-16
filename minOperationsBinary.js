//From 1758 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function minOperations(s) {
  let oneStart = 0;
  let zeroStart = 0;
  let noOnes = true;
  let noZeroes = true;
  for (let i = 0; i < s.length; i++) {
    let num = s[i];
    if (num === '0') {
      noZeroes = false;
    } else {
      noOnes = false;
    }
    if (i % 2 === 0) {
      if (num === '0') {
        oneStart++;
      } else {
        zeroStart++;
      }
    } else {
      if (num === '1') {
        oneStart++;
      } else {
        zeroStart++;
      }
    }
  }
  if (noOnes || noZeroes) {
    return Math.floor(s.length / 2);
  }
  return Math.min(oneStart, zeroStart);
}
