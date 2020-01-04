//From 436 in LeetCode

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
function findRightInterval(intervals) {
  let holder = intervals.reduce((acc, curr, index) => {
    acc[curr[0]] = index;
    return acc;
  }, {});
  let keys = Object.keys(holder).sort((x, y) => x - y);
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    let end = intervals[i][1];
    let index = keys.find(x => x >= end);
    if (index === undefined) {
      result.push(-1);
    } else {
      result.push(holder[index]);
    }
  }
  return result;
}
