//From 219 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let int = nums[i];
    let copy = nums.slice(i + 1);
    let index = copy.indexOf(int);
    if (index !== -1 && index < k) {
      return true;
    }
  }
  return false;
};

//faster

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  let holder = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (i - holder[num] <= k) {
      return true;
    } else {
      holder[num] = i;
    }
  }
  return false;
};
