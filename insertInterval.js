//From 57 in LeetCode

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  intervals.push(newInterval);
  intervals.sort((x, y) => {
    if (x[0] === y[0]) {
      return x[1] - y[1];
    } else {
      return x[0] - y[0];
    }
  });
  let result = [intervals[0]];
  for (let i = 0; i < intervals.length; i++) {
    let lastInt = result[result.length - 1];
    let current = intervals[i];
    if (lastInt[1] >= intervals[i][0]) {
      lastInt[1] = current[1] > lastInt[1] ? current[1] : lastInt[1];
      lastInt[0] = current[0] < lastInt[0] ? current[0] : lastInt[0];
    } else {
      result.push(current);
    }
  }
  return result;
}
