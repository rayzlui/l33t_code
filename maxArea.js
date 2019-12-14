//From 11 in LeetCode

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let maxHeight = Math.min(height[i], height[j]);
      max = Math.max(max, maxHeight * (j - i));
    }
  }
  return max;
}
