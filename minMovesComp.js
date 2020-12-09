//From 1674 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

function minMoves(nums, limit) {
  let range = {};
  let length = nums.length;
  for (let i = 0; i < length / 2; i++) {
    let front = nums[i];
    let back = nums[length - 1 - i];
    let sum = front + back;
    let low = Math.min(front, back) + 1;

    let high = sum + 1;
    let highMax = Math.max(front, back) + limit + 1;
    if (range[low]) {
      range[low]--;
    } else {
      range[low] = -1;
    }
    if (range[high]) {
      range[high]++;
    } else {
      range[high] = 1;
    }
    if (range[highMax]) {
      range[highMax]++;
    } else {
      range[highMax] = 1;
    }
    if (range[sum]) {
      range[sum]--;
    } else {
      range[sum] = -1;
    }
  }
  let start = length;
  let min = start;
  for (let sum in range) {
    start += range[sum];
    min = Math.min(min, start);
  }
  return min;
}
