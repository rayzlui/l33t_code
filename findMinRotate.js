//From 154 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  return Math.min(...nums);
}

//faster

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMinII(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      if (nums[right] === nums[right - 1]) {
        right--;
      } else {
        left = mid + 1;
      }
    }
  }
  return nums[left];
}
