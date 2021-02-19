//From 1752 in LeetCode

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function check(nums) {
  let start = 0;
  let next = 1;
  let front = [];
  let back = [];
  while (nums[start] <= nums[next]) {
    back.push(nums[start]);
    start++;
    next++;
  }
  back.push(nums[start]);
  if (back.length === nums.length) {
    return true;
  }
  start = next;
  next = start + 1;
  while (nums[start] <= nums[next]) {
    front.push(nums[start]);
    start++;
    next++;
  }
  front.push(nums[start]);
  if (
    front[0] <= back[0] &&
    front[front.length - 1] <= back[0] &&
    back.length + front.length === nums.length
  ) {
    return true;
  } else {
    return false;
  }
}
