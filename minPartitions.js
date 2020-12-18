//From 1689 in LeetCode

/**
 * @param {string} n
 * @return {number}
 */
function minPartitions(n) {
  return Math.max(...n.split(''));
}
