//From 448 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  let result = [];
  let makeObj = nums.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  for (let i = 1; i <= nums.length; i++) {
    if (makeObj[i.toString()] === undefined) {
      result.push(i);
    }
  }
  return result;
}
