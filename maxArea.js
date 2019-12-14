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

//faster

/**
 * @param {number[]} height
 * @return {number}
 */
function maxAreaII(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let heightLeft = height[left];
    let heightRight = height[right];
    let min = Math.min(heightLeft, heightRight);
    max = Math.max(max, min * (right - left));
    if (heightLeft > heightRight) {
      right--;
    } else {
      left++;
    }
  }
  return max;
}
