//From 1009 in LeetCode

/**
 * @param {number} N
 * @return {number}
 */
function bitwiseComplement(N) {
  let binary = N.toString(2).split('');
  let complement = binary.map(x => (x / 1 === 0 ? 1 : 0));
  return parseInt(complement.join('').toString(), 2);
}
