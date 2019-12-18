//From 1288 in LeetCode

/**
 * @param {number[][]} intervals
 * @return {number}
 */
function removeCoveredIntervals(intervals) {
  intervals.sort((x, y) => {
    if (x[1] === y[1]) {
      return y[0] - x[0];
    } else {
      return x[1] - y[1];
    }
  });
  let result = intervals.length;
  let holder = [];
  for (let i = 0; i < intervals.length; i++) {
    let current = intervals[i];
    for (let j = holder.length - 1; j >= 0; j--) {
      if (holder[j][0] > current[0]) {
        holder.splice(j, 1);
        result--;
      }
    }
    holder.push(current);
  }
  return result;
}
