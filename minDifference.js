//From 1509 in LeetCode
/**
 * @param {number[]} nums
 * @return {number}
 */
function minDifference(nums) {
  if (nums.length <= 4) {
    return 0;
  }
  nums.sort((x, y) => x - y);
  let diff = Infinity;
  let i = 0;
  let j = nums.length - 4;
  for (; j < nums.length; ) {
    let front = nums[i];
    let back = nums[j];
    i++;
    j++;

    diff = Math.min(diff, back - front);
  }
  return diff;
}