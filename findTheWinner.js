//From 1823 in LeetCode

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function findTheWinner(n, k) {
  let array = new Array(n).fill(0).map((x, i) => i + 1);
  let current = 0;
  while (array.length > 1) {
    current = (current + k - 1) % array.length;
    array.splice(current, 1);
  }
  return array[0];
}
