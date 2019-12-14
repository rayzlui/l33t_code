//From 137 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let counter = nums.reduce((acc, curr) => {
    if (acc[curr] === 2) {
      delete acc[curr];
    } else {
      if (acc[curr] === 1) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
    }
    return acc;
  }, {});
  return Object.keys(counter)[0];
}
