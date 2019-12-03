//From 287 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  return nums.find(x => {
    let filter = nums.filter(y => y === x);
    if (filter.length > 1) {
      return x;
    }
  });
}
