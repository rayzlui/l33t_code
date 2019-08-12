//From 1029 in LeetCode

/**
 * @param {number[][]} costs
 * @return {number}
 */
function twoCitySchedCost(costs) {
  let result = 0;
  let sorted = costs.sort((x, y) => x[0] - x[1] - (y[0] - y[1]));
  for (let i = 0; i < sorted.length / 2; i++) {
    result += sorted[i][0];
    result += sorted[sorted.length / 2 + i][1];
  }
  return result;
}
