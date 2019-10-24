//From 581 in LeetCode

/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  let sorted = nums.slice().sort((x, y) => x - y);

  if (nums.every((x, index) => x === sorted[index])) {
    return 0;
  }
  if (max !== nums[nums.length - 1] && min !== nums[0]) {
    return nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === min) {
      let copy = nums.slice(i + 1);
      min = copy.length === 0 ? 0 : Math.min(...copy);
    } else {
      min = i;
      break;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    let back = nums.length - (1 + i);
    if (nums[back] === max) {
      let copy = nums.slice(0, back);
      max = copy.length === 0 ? 0 : Math.max(...copy);
    } else {
      max = back;
      break;
    }
  }
  return max - min + 1;
};

//faster

/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
  let left;
  let right;
  let sorted = nums.slice().sort((x, y) => x - y);

  if (nums.every((x, index) => x === sorted[index])) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sorted[i]) {
      left = i;
      break;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    let back = nums.length - (1 + i);
    if (nums[back] !== sorted[back]) {
      right = back;
      break;
    }
  }
  if (left === undefined && right === undefined) {
    return nums.length;
  }
  return right - left + 1;
}
