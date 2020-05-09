//From 220 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= k + i; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }
  return false;
}
