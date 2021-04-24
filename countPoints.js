//From 1828 in LeetCode

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
function countPoints(points, queries) {
  //check magnitude from point to center of circle, if it's less than radius its good.
  return queries.map(circle => {
    let result = 0;
    let x = circle[0];
    let y = circle[1];
    let radius = circle[2];
    for (let i = 0; i < points.length; i++) {
      let current = points[i];
      let currentX = current[0];
      let currentY = current[1];
      let magnitude = Math.sqrt((currentX - x) ** 2 + (currentY - y) ** 2);
      if (magnitude <= radius) {
        result++;
      }
    }
    return result;
  });
}
