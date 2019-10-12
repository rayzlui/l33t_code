//From 594 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
let findLHS = function(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    let longestP = 0;
    let longestN = 0;
    let dif;
    for (let j = i + 1; j < nums.length; j++) {
      let current = nums[j];
      let sub = start - current;
      if (sub === 1 || sub === -1 || sub === 0) {
        dif = dif && dif !== 0 ? dif : sub;
        if (sub === 0) {
          longestN++;
          longestP++;
        } else if (sub === -1) {
          longestN++;
        } else {
          longestP++;
        }
      }
    }
    if (dif !== 0) {
      if (longestN > 0) {
        longestN++;
      }
      if (longestP > 0) {
        longestP++;
      }
      let longer = Math.max(longestN, longestP);
      result = Math.max(result, longer);
    }
  }
  return result;
};
