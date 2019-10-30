//From 973 in LeetCode

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

function distance(x, y) {
  return Math.sqrt(x * x + y * y);
}
function kClosest(points, K) {
  let sorted = points.sort((x, y) => distance(...x) - distance(...y));
  return sorted.splice(0, K);
};
