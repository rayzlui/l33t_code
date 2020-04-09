//From 41 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  let seen = nums.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  for (let i = 0; i < nums.length + 1; i++) {
    if (seen[i + 1] === undefined) {
      return i + 1;
    }
  }
}
