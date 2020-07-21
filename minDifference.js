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

//faster
/**
 * @param {number[]} nums
 * @return {number}
 */
function minDifferenceII(nums) {
  if (nums.length <= 4) {
    return 0;
  }
  nums.sort((x, y) => x - y);
  let diff = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let front = nums[i];
    let back = nums[nums.length - 4 + i];
    if (back === undefined) {
      return diff;
    }
    diff = Math.min(diff, back - front);
  }
  return diff;
}
