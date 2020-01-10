//From 435 in LeetCode

/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  let count = 0;
  intervals = intervals.sort((x, y) => x[1] - y[1]);
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let previous = intervals[i - 1];
    if (current[0] < previous[1]) {
      count++;
      intervals.splice(i, 1);
      i--;
    }
  }
  return count;
}

//faster

/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervalsII(intervals) {
  let count = 0;
  intervals = intervals.sort((x, y) => x[1] - y[1]);
  let previous = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    if (current[0] < previous[1]) {
      count++;
    } else {
      previous = current;
    }
  }
  return count;
}
