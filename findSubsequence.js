//From 491 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function findSubsequences(nums) {
  let seen = {};
  let result = [];
  function recursion(nums, array, string) {
    if (array.length >= 2) {
      if (seen[string] === undefined) {
        result.push(array);
        seen[string] = true;
      }
    }
    for (let i = 0; i < nums.length; i++) {
      let current = nums[i];
      let copy = array.slice();
      if (copy[copy.length - 1] <= current || copy.length === 0) {
        copy.push(current);
        let str = string + ' ' + current;
        recursion(nums.slice(i + 1), copy, str);
      }
    }
  }
  recursion(nums, [], '');
  return result;
}
