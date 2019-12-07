//From 1248 from LeetCode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numberOfSubarrays(nums, k) {
  let result = 0;

  let slice = nums.slice(0, 0 + k);
  let startOdds = slice.filter(x => x % 2 === 1).length;
  let right = k;
  let partial = startOdds === k ? 1 : 0;
  for (let i = 0; i <= nums.length - k; i++) {
    let odds = startOdds;
    if (odds === k) {
      result += partial;
    }
    for (let j = right; j < nums.length; j++) {
      let next = nums[j];
      if (nums[j] % 2 === 1) {
        odds++;
      }
      if (odds === k) {
        result++;
        partial++;
      }
      if (odds > k) {
        odds--;
        right = j;
        break;
      }
      if (j === nums.length - 1) {
        right = j + 1;
      }
    }
    if (nums[i] % 2 === 1) {
      odds--;
      partial = 0;
    }
    startOdds = odds;
  }
  return result;
};
