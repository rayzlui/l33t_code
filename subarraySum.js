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
