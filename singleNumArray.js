//From 136 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  for (let i = 0; i < nums.length; ) {
    let remove = nums[i];
    nums.splice(i, 1);
    let other = nums.indexOf(remove);
    if (other === -1) {
      return remove;
    } else {
      nums.splice(other, 1);
    }
  }
};
