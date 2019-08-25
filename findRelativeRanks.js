//From 506 in LeetCode

/**
 * @param {number[]} nums
 * @return {string[]}
 */
function findRelativeRanks(nums) {
  let points = nums.slice().sort((x, y) => y - x);

  for (let i = 0; i < points.length; i++) {
    if (i === 0) {
      nums[nums.indexOf(points[i])] = 'Gold Medal';
    } else if (i === 1) {
      nums[nums.indexOf(points[i])] = 'Silver Medal';
    } else if (i === 2) {
      nums[nums.indexOf(points[i])] = 'Bronze Medal';
    } else {
      nums[nums.indexOf(points[i])] = (i + 1).toString();
    }
  }
  return nums;
}
