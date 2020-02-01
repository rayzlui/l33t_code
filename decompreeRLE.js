//From 1313 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i += 2) {
    let rep = nums[i];
    let value = nums[i + 1];
    for (let j = 0; j < rep; j++) {
      result.push(value);
    }
  }
  return result;
}
