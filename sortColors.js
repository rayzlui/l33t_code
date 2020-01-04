//From 75 in LeetCode

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  let indices = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let num = nums.splice(i, 1)[0];
      nums.unshift(num);
    } else if (nums[i] === 2) {
      let num = nums.splice(i, 1);
      indices++;
      i--;
    }
  }
  for (let i = 0; i < indices; i++) {
    nums.push(2);
  }

  return nums;
}
