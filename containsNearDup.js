//From Sept Challenge 2 from LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    for (let j = i + 1; j <= i + k; j++) {
      let compare = nums[j];
      if (Math.abs(current - compare) <= t) {
        return true;
      }
    }
  }
  return false;
}
