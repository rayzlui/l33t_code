//From 84 in LeetCode

/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  let store = {};
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    store[i] = heights[i];
    max = Math.max(heights[i], max);
    for (let j = 0; j < i; j++) {
      if (store[j] > heights[i]) {
        store[j] = heights[i];
        max = Math.max(max, heights[i] * (i - j + 1));
      } else {
        max = Math.max(max, store[j] * (i - j + 1));
      }
    }
  }
  return max;
}
