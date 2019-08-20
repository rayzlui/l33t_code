//From 169 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let counter = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    counter[currentNum] =
      counter[currentNum] === undefined ? 1 : (counter[currentNum] += 1);
    if (counter[currentNum] >= nums.length / 2) {
      return currentNum;
    }
  }
}
