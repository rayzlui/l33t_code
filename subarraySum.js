//From 560 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
  let values = nums.reduce((acc, x, index) => {
    if (index > 0) {
      acc[index] = x + acc[index - 1];
    } else {
      acc[0] = x;
    }
    return acc;
  }, []);
  let result = 0;
  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    if (value === k) {
      result++;
    }
    for (let j = 0; j < i; j++) {
      if (value - values[j] === k) {
        result++;
      }
    }
  }
  return result;
}

//faster

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySumII(nums, k) {
  let values = { 0: 1 };
  let result = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let diff = sum - k;
    if (values[diff]) {
      result += values[diff];
    }
    if (values[sum]) {
      values[sum]++;
    } else {
      values[sum] = 1;
    }
  }

  return result;
}
