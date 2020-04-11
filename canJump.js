//From 55 in LeetCode

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let start = 0;
  while (start < nums.length - 1) {
    let moves = nums[start];
    if (moves === 0) {
      return false;
    }
    if (moves + start >= nums.length - 1) {
      break;
    }
    let index = 0;
    for (let i = 0; i < moves; i++) {
      let curr = nums[i + start + 1];
      if (curr + i >= nums[index + start + 1] + index) {
        index = i;
      }
    }
    start += index + 1;
  }
  return true;
}
