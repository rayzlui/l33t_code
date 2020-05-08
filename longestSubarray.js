//From 1438 in Leetcode

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
function longestSubarray(nums, limit) {
  let left = 0;
  let right = 0;
  let result = 0;
  let queue = {};
  for (; left < nums.length; ) {
    let current = nums[right];
    if (queue[current]) {
      queue[current]++;
    } else {
      queue[current] = 1;
    }
    let keys = Object.keys(queue);
    let max = keys[keys.length - 1] / 1;
    let min = keys[0] / 1;
    if (max - min > limit) {
      result = Math.max(result, right - left);
      if (queue[nums[left]] <= 1) {
        delete queue[nums[left]];
      } else {
        queue[nums[left]]--;
      }
      queue[current]--;

      left++;
    } else {
      right++;
    }
    if (right >= nums.length) {
      result = Math.max(result, right - left);
      return result;
    }
  }
  return result;
}
