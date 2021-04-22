//From 1829 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
function getMaximumXor(nums, maximumBit) {
  let max = 2 ** maximumBit - 1;
  let result = [];
  let start = nums.reduce((acc, curr) => {
    acc = acc ^ curr;
    return acc;
  }, 0);
  for (let i = nums.length - 1; i >= 0; i--) {
    let diff = max - start;
    result.push(diff);
    let last = nums[i];
    start = start ^ last;
  }
  return result;
}
