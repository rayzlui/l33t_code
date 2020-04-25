//From 164 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumGap(nums) {
  if (nums.length < 2) {
    return 0;
  }
  let values = nums.reduce((acc, curr) => {
    if (acc[curr] === undefined) {
      acc[curr] = true;
    }
    return acc;
  }, {});
  let keys = Object.keys(values);
  let max = 0;
  keys.forEach((x, index) => {
    let value = keys[index + 1] - x;
    if (value * 0 === 0) {
      max = Math.max(value, max);
    }
  });
  return max;
}
