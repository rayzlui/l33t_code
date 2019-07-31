//From 693 in LeetCode

/**
 * @param {number} n
 * @return {boolean}
 */
function hasAlternatingBits(n) {
  let binary = n.toString(2);
  for (let i = 0; i < binary.length - 1; i++) {
    if (binary[i] === binary[i + 1]) {
      return false;
    }
  }
  return true;
}
