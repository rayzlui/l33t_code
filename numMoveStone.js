//From 1033 in LeetCode

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
function numMovesStones(a, b, c) {
  let sorted = [a, b, c].sort((x, y) => x - y);
  let max = sorted[2] - sorted[0] - 2;
  let min = 2;
  if (
    Math.abs(sorted[0] - sorted[1]) <= 2 ||
    Math.abs(sorted[1] - sorted[2]) <= 2
  ) {
    min = 1;
  }
  if (max === 0) {
    min = 0;
  }
  return [min, max];
}
