//From 216 in LeetCode

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
  let results = [];
  function recursion(arr, nums) {
    if (arr.length === k) {
      let sum = arr.reduce((acc, curr) => acc + curr, 0);
      if (sum === n) {
        results.push(arr);
      }
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      let copy = arr.slice();
      copy.push(nums[i]);
      recursion(copy, nums.slice(i + 1));
    }
  }
  recursion([], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return results;
}
