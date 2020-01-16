//From 853 in LeetCode

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function carFleet(target, position, speed) {
  let travelTime = speed
    .reduce((acc, curr, index) => {
      acc.push([position[index], curr]);
      return acc;
    }, [])
    .sort((x, y) => y[0] - x[0])
    .map(x => (target - x[0]) / x[1]);
  let result = 0;
  while (travelTime.length > 1) {
    let furthest = travelTime.shift();
    if (furthest < travelTime[0]) {
      result++;
    } else {
      travelTime[0] = furthest;
    }
  }
  return travelTime.length > 0 ? result + 1 : result + 0;
}
