//From 674 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
let findLengthOfLCIS = function(nums) {
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    let previous = nums[i];
    let sub = 1;
    for (let j = i + 1; i < nums.length; j++) {
      let current = nums[j];
      if (current > previous) {
        previous = current;
        sub++;
      } else {
        break;
      }
      i = j - 1;
    }
    longest = Math.max(longest, sub);
  }
  return longest;
};
