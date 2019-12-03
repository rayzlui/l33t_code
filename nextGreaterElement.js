//From 503 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let check = nums.slice(i + 1);
    let next = check.find(x => x > nums[i]);

    if (next === undefined) {
      next = nums.find(x => x > nums[i]);
    }
    next === undefined ? result.push(-1) : result.push(next);
  }
  return result;
}
