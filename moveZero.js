//From 283 in LeetCode

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let j = 0;
  for (let i = 0; j < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
      i--;
    }
    j++;
  }
}
