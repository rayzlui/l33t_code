//From 416 in LeetCode

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  let total = nums.reduce((acc, curr) => acc + curr, 0);
  if (total % 2 === 1) {
    return false;
  }
  let half = total / 2;
  let result = false;
  nums = nums.sort((x, y) => y - x);
  if (nums[0] > half) {
    return false;
  }
  function recursion(source, sum) {
    if (result) {
      return;
    }
    if (sum > half) {
      return;
    }
    if (sum === half) {
      result = true;
      return;
    }
    for (let i = 0; i < source.length; i++) {
      if (result) {
        return;
      }
      recursion(source.slice(i + 1), sum + source[i]);
    }
  }
  recursion(nums, 0);
  return result;
}
