//From 1184 in LeetCode

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
function distanceBetweenBusStops(distance, start, destination) {
  let dist1 = 0;
  let dist2 = 0;
  if (start < destination) {
    let forward = distance.slice(start, destination).reduce((x, y) => x + y, 0);
    let backward1 = distance.slice(0, start).reduce((x, y) => x + y, 0);
    let backward2 = distance.slice(destination).reduce((x, y) => x + y, 0);
    dist2 += backward1 + backward2;
    dist1 += forward;
  } else {
    let forward = distance.slice(destination, start);
    forward = forward.reduce((x, y) => x + y, 0);
    let backward1 = distance.slice(0, destination).reduce((x, y) => x + y, 0);
    let backward2 = distance.slice(start).reduce((x, y) => x + y, 0);
    dist2 += backward1 + backward2;
    dist1 += forward;
  }
  return Math.min(dist2, dist1);
};

//cleaner

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
function distanceBetweenBusStops(distance, start, destination) {
  let front = start > destination ? destination : start;
  let back = start > destination ? start : destination;
  let forward = distance.splice(front, back - front).reduce((x, y) => x + y, 0);
  let backwards = distance.reduce((x, y) => x + y, 0);
  return Math.min(forward, backwards);
};
