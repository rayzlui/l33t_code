//From 1403 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function minSubsequence(nums) {
  if (nums.length < 2) {
    return nums;
  }
  nums.sort((x, y) => y - x);
  let antiSum = nums.shift();
  let total = nums.reduce((acc, curr) => acc + curr);
  let result = [antiSum];
  let i = 0;
  while (total >= antiSum) {
    antiSum += nums[i];
    total -= nums[i];
    result.push(nums[i]);
    i++;
  }
  return result;
}
