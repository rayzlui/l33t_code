//From 665 in LeetCode

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function checkPossibility(nums) {
  let decrease = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let next = nums[i + 1];
    if (next < current) {
      decrease++;
      if (decrease > 1) {
        return false;
      }
    }
    if (decrease === 1 && (i !== 0 && i !== nums.length - 1)) {
      let nextNext = nums[i + 2];
      let previous = nums[i - 1];
      if (nextNext < current && next < previous) {
        return false;
      }
    }
  }
  return true;
}
