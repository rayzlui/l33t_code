//From 1696 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxResult(nums, k) {
  //go for first positive, if none, take lowest negative

  let sum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let lowestNegativeIndex;
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      let value = nums[j];
      if (value >= 0) {
        lowestNegativeIndex = j;
        break;
      } else {
        if (lowestNegativeIndex === undefined) {
          lowestNegativeIndex = j;
        }
        if (value > nums[lowestNegativeIndex]) {
          lowestNegativeIndex = j;
        }
      }
    }
    if (lowestNegativeIndex) {
      if (i + k < nums.length - 1) {
        sum += nums[lowestNegativeIndex];
        i = lowestNegativeIndex - 1;
      } else {
        if (nums[lowestNegativeIndex] < 0) {
          return sum + nums[nums.length - 1];
        } else {
          sum += nums[lowestNegativeIndex];
          i = lowestNegativeIndex - 1;
        }
      }
    }
  }
  return sum;
}
