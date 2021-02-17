//From 1753 in LeetCode

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function maximumScore(a, b, c) {
  let sum = a + b + c;
  let nums = [a, b, c];
  nums.sort((a, b) => a - b);
  let min = nums[0];
  let mid = nums[1];
  let max = nums[2];
  if (max >= sum / 2) {
    return nums[0] + nums[1];
  } else {
    let result = min;
    let diff = max - min;
    let remainder = Math.min(mid, diff);
    result += remainder;
    result += Math.floor(Math.abs(mid - diff) / 2);
    return result;
  }
}
