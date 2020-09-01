//From 1558 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
  let result = 0;
  let double = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let power = 0;
    while (current > 0) {
      if (current % 2 === 1) {
        current--;
        result++;
      } else {
        current = current / 2;
        power++;
      }
    }
    if (power > double) {
      double = power;
    }
  }
  return result + double;
}
