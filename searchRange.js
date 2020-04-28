//From 34 in LeetCode

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((right + left) / 2);
  if (nums.length === 0) {
    return [-1, -1];
  }
  if (nums.length === 1) {
    if (nums[0] === target) {
      return [0, 0];
    } else {
      return [-1, -1];
    }
  }
  if (nums[left] === target && nums[right] === target) {
    return [left, right];
  } else if (nums[left] === target) {
    while (nums[mid] !== target) {
      right = mid - 1;
      mid = Math.ceil((left + right) / 2);
    }
    while (nums[right] !== target) {
      right--;
    }
    return [left, right];
  } else if (nums[right] === target) {
    while (nums[mid] !== target) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
    while (nums[left] !== target) {
      left++;
    }
    return [left, right];
  } else {
    while (nums[mid] !== target) {
      if (nums[left] === target) {
        break;
      }
      if (nums[right] === target) {
        break;
      }
      if (left + 1 >= right) {
        return [-1, -1];
      }
      if (nums[mid] < target) {
        left = mid + 1;
        mid = Math.floor((left + right) / 2);
      } else {
        right = mid - 1;
        mid = Math.ceil((left + right) / 2);
      }
    }
    while (nums[left] !== target) {
      left++;
    }
    while (nums[right] !== target) {
      right--;
    }
    return [left, right];
  }
}
