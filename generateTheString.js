//From 1374 in LeetCode

/**
 * @param {number} n
 * @return {string}
 */

function generateTheString(n) {
  if (n % 2 === 1) {
    return new Array(n).fill('a').join('');
  }
  return new Array(n - 1).fill('a').join('') + 'b';
}
