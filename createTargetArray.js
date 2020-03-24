//From 1389 in LeetCode

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
function createTargetArray(nums, index) {
  return nums.reduce((acc, curr, i) => {
    acc.splice(index[i], 0, curr);
    return acc;
  }, []);
}
