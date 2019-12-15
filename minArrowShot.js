//From 452 in LeetCode

/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
  //sort by second coordinate. first second coordinate is going to be target because anything behind it will be greater and if the first coordinate smaller we add it, if not then we create a new one.
  points = points.sort((x, y) => x[1] - y[1]);
  let holder = {};
  for (let i = 0; i < points.length; i++) {
    let current = points[i];
    let hasIntersection = false;
    for (let a in holder) {
      if (current[0] <= a) {
        hasIntersection = true;
        break;
      }
    }
    if (!hasIntersection) {
      holder[current[1]] = true;
    }
  }
  return Object.keys(holder).length;
}

//faster

/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShotsII(points) {
  //sort by second coordinate. first second coordinate is going to be target because anything behind it will be greater and if the first coordinate smaller we add it, if not then we create a new one.
  points = points.sort((x, y) => x[1] - y[1]);
  let count = 0;
  let highest = -Infinity;
  for (let i = 0; i < points.length; i++) {
    let current = points[i];
    if (current[0] > highest) {
      highest = current[1];
      count++;
    }
  }
  return count;
}
