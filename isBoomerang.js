//From 1037 in LeetCode

/**
 * @param {number[][]} points
 * @return {boolean}
 */

function isBoomerang(point) {
  let points = point.sort((x, y) => {
    if (x[0] === y[0]) {
      return x[1] - y[1];
    } else {
      return x[0] - y[0];
    }
  });
  let pointA = points[0];
  let pointB = points[1];
  let pointC = points[2];
  let xAxis = pointA[0] - pointB[0];
  let yAxis = pointA[1] - pointB[1];
  if (xAxis === 0 && yAxis === 0) {
    return false;
  }
  let xAxis2 = pointB[0] - pointC[0];
  let yAxis2 = pointB[1] - pointC[1];
  if (
    (xAxis === xAxis2 && yAxis === yAxis2) ||
    (xAxis === 0 && xAxis2 === 0) ||
    (yAxis === 0 && yAxis2 === 0)
  ) {
    return false;
  }
  if (xAxis2 === 0 && yAxis2 === 0) {
    return false;
  }
  return true;
}
