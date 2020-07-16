//From 1503 in LeetCode

/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
function getLastMoment(n, left, right) {
  let lowestRight = Math.min(...right);
  let highestLeft = Math.max(...left);
  return Math.max(n - lowestRight, highestLeft);
}
