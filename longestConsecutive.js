//From 128 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  let store = {};
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    store[num] = true;
    let consecutive = 1;
    let up = num + 1;
    let down = num - 1;
    while (store[up]) {
      consecutive++;
      up++;
    }
    while (store[down]) {
      consecutive++;
      down--;
    }
    longest = Math.max(longest, consecutive);
  }
  return longest;
}
