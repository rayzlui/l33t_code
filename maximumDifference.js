//From 2016 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumDifference(nums) {
  let previous = [];
  let min = 0;
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    for (let j = 0; j < previous.length; j++) {
      let diff = val - previous[j];
      if (diff > 0) {
        min = Math.max(diff, min);
      }
    }
    previous.push(val);
  }
  return min || -1;
}
