//From 1480 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
  let result = nums.reduce(
    (acc, curr) => {
      acc.push(curr + acc[acc.length - 1]);
      return acc;
    },
    [0],
  );
  result.shift();
  return result;
}
