//From 1365 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  return nums.map(x => nums.filter(y => y < x).length);
}
