//From 1376 in LeetCode

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
function numOfMinutes(n, headID, manager, informTime) {
  if (n === 1) {
    return 0;
  }
  let maxTime = 0;
  let holder = manager.reduce((acc, curr, index) => {
    if (curr >= 0) {
      if (acc[curr]) {
        acc[curr].push(index);
      } else {
        acc[curr] = [index];
      }
    }
    return acc;
  }, {});
  function recursion(current, time) {
    let subOrdinates = holder[current];
    time += informTime[current];
    if (subOrdinates === undefined) {
      maxTime = Math.max(maxTime, time);
      return;
    }
    subOrdinates.forEach(x => {
      recursion(x, time);
    });
  }
  recursion(headID, 0);
  return maxTime;
}
