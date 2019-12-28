//From 90 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  let result = [];
  let seen = {};
  function recursion(source, array) {
    let val1 = array.reduce((acc, curr) => acc + curr * 19, 0);
    let val2 = array.reduce((acc, curr) => acc * (curr + 19), 1);
    if (seen[val1 * val2 + 200 * val2 + 200 * val1] === undefined) {
      result.push(array);
      seen[val1 * val2 + 200 * val2 + 200 * val1] = true;
    }
    for (let i = 0; i < source.length; i++) {
      let copyArr = array.slice();
      copyArr.push(source[i]);
      recursion(source.slice(i + 1), copyArr);
    }
  }
  recursion(nums, []);
  return result;
}
