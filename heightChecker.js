//From 1051 in LeetCode

/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
  let correctOrder = heights.slice();
  correctOrder.sort((x, y) => x - y);
  let result = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== correctOrder[i]) {
      result++;
    }
  }
  return result;
}
