//From 476 in LeetCode

/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
  let binary = num
    .toString(2)
    .split('')
    .map(x => (x / 1 === 1 ? 0 : 1))
    .join('');
  return parseInt(binary, 2);
}
