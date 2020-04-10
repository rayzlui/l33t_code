//From 42 in LeetCode

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let maxPeak = Math.max(...height);
  let maxIndex = height.indexOf(maxPeak);
  let trap = 0;
  let peak = 0;
  let inclines = 0;
  let span = 0;
  for (let i = 0; i <= maxIndex; i++) {
    let current = height[i];
    if (current >= peak) {
      trap += peak * span - inclines;
      span = 0;
      inclines = 0;
      peak = current;
    } else {
      span++;
      inclines += current;
    }
  }
  span = inclines = peak = 0;
  for (let i = height.length - 1; i >= maxIndex; i--) {
    let current = height[i];
    if (current >= peak) {
      trap += peak * span - inclines;
      span = 0;
      inclines = 0;
      peak = current;
    } else {
      span++;
      inclines += current;
    }
  }
  return trap;
}
