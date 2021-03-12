//From 1779 in LeetCode

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
function nearestValidPoint(x, y, points) {
  let result = -1;
  let distance = Infinity;
  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    let pointX = point[0];
    let pointY = point[1];
    if (pointX === x || pointY === y) {
      let dist = Math.abs(pointX - x) + Math.abs(pointY - y);
      if (distance > dist) {
        result = i;
        distance = dist;
      }
    }
  }
  return result;
}
