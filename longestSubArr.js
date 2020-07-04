//From 1493 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestSubarray(nums) {
  let max = 0;
  let reset = false;
  let count = 0;
  let containedZero = false;
  let lastIndex = null; //this should be the index following a zero without a reset, if it's a zero again, we proceed until next one
  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];
    if (number === 1) {
      count++;
    } else {
      containedZero = true;
      if (reset) {
        max = Math.max(count, max);
        count = 0;
        reset = false;
        i = lastIndex;
        lastIndex = null;
      } else {
        reset = true;
        lastIndex = i;
      }
    }
  }
  if (!containedZero) {
    count--;
  }
  return Math.max(max, count);
}
