//From 1030 in LeetCode

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
function allCellsDistOrder(R, C, r0, c0) {
  let result = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      result.push([i, j]);
    }
  }
  return result.sort(
    (x, y) =>
      Math.abs(x[0] - r0) +
      Math.abs(x[1] - c0) -
      (Math.abs(y[0] - r0) + Math.abs(y[1] - c0)),
  );
};
