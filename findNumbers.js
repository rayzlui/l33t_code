//From 1295 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
  return nums.reduce((acc, curr) => {
    if (curr.toString().length % 2 === 0) {
      acc++;
    }
    return acc;
  }, 0);
}
