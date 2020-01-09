//From 80 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let value = null;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current === value) {
      if (count === 2) {
        nums.splice(i, 1);
        i--;
      } else {
        count++;
      }
    } else {
      value = current;
      count = 1;
    }
  }
  return nums.length;
}
