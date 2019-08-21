//From 217 in LeetCode

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  let numsCount = {};
  for (let element of nums) {
    if (numsCount[element] !== undefined) {
      return true;
    }
    numsCount[element] = true;
  }
  return false;
}
