//From 191 in LeetCode

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function(n) {
  let string = `${n.toString(2)}`;
  let ones = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '1') {
      ones++;
    }
  }
  return ones;
};
