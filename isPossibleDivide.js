//From 1296 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function isPossibleDivide(nums, k) {
  if (nums.length % k === 0) {
    nums = nums.sort((x, y) => x - y);
    while (nums.length > 0) {
      let start = nums.shift();
      for (let i = 1; i < k; i++) {
        let index = nums.indexOf(start + i);
        if (index === -1) {
          return false;
        }
        nums.splice(index, 1);
      }
    }
    return true;
  }
  return false;
}