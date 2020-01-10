//From 162 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
  if (nums.length === 1) {
    return 0;
  }

  let index = nums.findIndex(
    (x, index) => x > nums[index - 1] && x > nums[index + 1],
  );
  if (index === -1) {
    if (nums[0] > nums[1]) {
      return 0;
    }
    if (nums[nums.length - 1] > nums[nums.length - 2]) {
      return nums.length - 1;
    }
  }
  return index;
}
