//From 561 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayPairSum(nums) {
  return nums
    .sort((x, y) => x - y)
    .reduce((accum, current, index) => {
      if (index % 2 === 0) {
        accum += current;
      }
      return accum;
    }, 0);
}
