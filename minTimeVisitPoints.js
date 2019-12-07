//From 1266 in LeetCode

/**
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points) {
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let point1 = points[i];
    let point2 = points[i + 1];
    let vert = Math.abs(point1[0] - point2[0]);
    let horz = Math.abs(point1[1] - point2[1]);
    if (vert === horz) {
      result += vert;
    } else {
      result += vert > horz ? horz + (vert - horz) : vert + (horz - vert);
    }
  }
  return result;
}
