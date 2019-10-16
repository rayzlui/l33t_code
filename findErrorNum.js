//From 645 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findErrorNums = function(nums) {
  let copy = new Array(nums.length).fill('a');
  let expectedSum = copy.reduce((acc, curr, index) => {
    return acc + (index + 1);
  }, 0);
  let sum = nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  let dup = [];
  let storage = {};
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (storage[curr]) {
      dup.push(curr);
      sum = sum - curr;
      break;
    }
    storage[curr] = true;
  }
  dup.push(expectedSum - sum);
  return dup;
};
