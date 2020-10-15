//From 1610 in LeetCode

/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
function getAngle(source, base, line) {
  let x1 = base[0] - source[0];
  let y1 = base[1] - source[1];
  let x2 = line[0] - source[0];
  let y2 = line[1] - source[1];
  let magBase = Math.sqrt(x1 ** 2 + y1 ** 2);
  let magLine = Math.sqrt(x2 ** 2 + y2 ** 2);
  let crossMulti = x1 * x2 + y1 * y2;
  let isNeg = 0;
  if (line[1] < source[1]) {
    isNeg = 360;
  }
  return Math.abs(
    Math.acos(crossMulti / (magLine * magBase)) * (180 / Math.PI) - isNeg,
  );
}
function visiblePoints(points, angle, location) {
  if (angle === 360) {
    return points.length;
  }
  let locationInPoint = 0;
  let angles = points.reduce((acc, point) => {
    if (point[0] === location[0] && point[1] === location[1]) {
      locationInPoint++;
    } else {
      let extend = [location[0] + 1, location[1]];
      let currAngle = getAngle(location, extend, point);
      if (point[1] === location[1]) {
        currAngle = 0;
      }
      if (currAngle - Math.floor(currAngle) < 0.0001) {
        currAngle = Math.floor(currAngle);
      }
      if (acc[currAngle]) {
        acc[currAngle]++;
      } else {
        acc[currAngle] = 1;
      }
    }
    return acc;
  }, {});
  let keys = Object.keys(angles).sort((x, y) => x / 1 - y / 1);
  let extra = keys.map(x => {
    let val = x / 1 + 360;
    angles[val] = angles[x];
    return val;
  });
  keys.push(...extra);
  let max = 0;
  let current = 0;
  let front = 0;
  let back = 0;
  while (front < keys.length) {
    let frontVal = keys[front] / 1;
    let backVal = keys[back] / 1;

    if (backVal - frontVal <= angle) {
      current += angles[backVal];
      back++;
    } else {
      max = Math.max(current, max);
      current -= angles[frontVal];
      front++;
    }
  }
  return max + locationInPoint;
}
