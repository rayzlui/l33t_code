//From 334 in LeetCode

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (curr > second) {
      return true;
    }
    if (curr > first) {
      second = curr;
    } else {
      first = curr;
    }
  }
  return false;
}
