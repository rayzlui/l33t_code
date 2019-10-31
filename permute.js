//From 46 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  let result = [];
  function recursion(array, dict) {
    let newArray = array.slice();
    let copyDict = dict.slice();
    if (newArray.length === nums.length) {
      result.push(newArray);
      return;
    }
    for (let i = 0; i < dict.length; i++) {
      newArray.push(dict[i]);
      let atI = copyDict.splice(i, 1)[0];
      recursion(newArray, copyDict);
      newArray.pop();
      copyDict.splice(i, 0, atI);
    }
  }
  recursion([], nums);
  return result;
}
