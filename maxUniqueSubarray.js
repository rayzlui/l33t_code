//From 1695 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumUniqueSubarray(nums) {
  let left = 0;
  let right = 0;
  let seen = {};
  let sum = 0;
  let max = 0;
  while (right < nums.length) {
    let current = nums[right];
    if (seen[current] === 1) {
      max = Math.max(max, sum);

      let leftest = nums[left];
      sum -= leftest;
      seen[leftest]--;
      left++;
    } else {
      seen[current] = 1;
      sum += current;
      right++;
    }
  }
  return Math.max(max, sum);
}
