//From 1573 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function numWays(s) {
  let indices = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      indices.push(i);
    }
  }
  let length = indices.length;
  if (length % 3 !== 0) {
    return 0;
  }
  if (length === 0) {
    let sum = 0;
    let start = s.length - 2;
    while (start > 0) {
      sum = (start + sum) % (10 ** 9 + 7);
      start--;
    }
    return sum;
  } else {
    let firstBreak = length / 3;
    let secondBreak = firstBreak * 2;
    let numZeroOne = indices[firstBreak] - indices[firstBreak - 1];
    let numZeroTwo = indices[secondBreak] - indices[secondBreak - 1];
    return (numZeroOne * numZeroTwo) % (10 ** 9 + 7);
  }
}
