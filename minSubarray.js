//From 1590 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
function minSubarray(nums, p) {
  let sum = nums.reduce((acc, curr) => acc + curr);
  if (sum < p) {
    return -1;
  }
  if (sum % p === 0) {
    return 0;
  }
  let holder = { 0: -1 };
  let total = 0;
  let remainder = sum % p;
  let count = Infinity;
  for (let i = 0; i < nums.length; i++) {
    total = (total + nums[i]) % p;
    let diff = (total - remainder + p) % p;

    if (holder[diff] !== undefined) {
      count = Math.min(count, i - holder[diff]);
    }
    holder[total] = i;
  }
  return count < nums.length ? count : -1;
}
