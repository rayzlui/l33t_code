//From 260 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (seen[num]) {
      delete seen[num];
    } else {
      seen[num] = true;
    }
  }
  return Object.keys(seen);
}
