//From 153 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let lowest = nums.find(x => x < nums[0]);
  if (lowest !== undefined) {
    return lowest;
  } else {
    return nums[0];
  }
}
