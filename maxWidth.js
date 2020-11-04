//From 1637 from LeetCode

/**
 * @param {number[][]} points
 * @return {number}
 */
function maxWidthOfVerticalArea(points) {
  points.sort((x, y) => x[0] - y[0]);
  let max = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let x = points[i][0];
    let y = points[i + 1][0];
    max = Math.max(max, y - x);
  }
  return max;
}
