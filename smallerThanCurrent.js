//From 1365 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  return nums.map(x => nums.filter(y => y < x).length);
}

//faster

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrentII(nums) {
  let sortedNums = nums.slice().sort((x, y) => x - y);
  return nums.map(x => sortedNums.indexOf(x));
}
