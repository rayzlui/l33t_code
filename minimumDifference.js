//From 1984 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minimumDifference(nums, k) {
  nums.sort((x, y) => x - y);
  let min = Infinity;
  for (let i = 0; i < nums.length - k + 1; i++) {
    let front = nums[i];
    let back = nums[i + k - 1];
    min = Math.min(back - front, min);
  }
  return min;
}
