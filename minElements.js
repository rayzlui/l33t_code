//From 1785 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
function minElements(nums, limit, goal) {
  let sum = nums.reduce((acc, curr) => acc + curr);
  let difference = goal - sum;
  if (difference === 0) {
    return 0;
  }
  if (difference > 0) {
    return Math.ceil(difference / limit);
  } else {
    return Math.ceil(difference / -limit);
  }
}
