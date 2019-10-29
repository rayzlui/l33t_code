//From 442 in LeetCode

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
  let result = [];
  let reverse = nums.reverse();
  for (let i = 0; i < nums.length; i++) {
    let index = reverse.indexOf(nums[i]);
    if (index !== i) {
      result.push(nums[i]);
    }
  }
  return result;
};

//faster

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicatesII(nums) {
  let result = [];
  let reverse = nums.sort((x, y) => x - y);
  for (let i = 0; i < nums.length; i++) {
    if (reverse[i] === reverse[i - 1]) {
      result.push(nums[i]);
    }
  }
  return result;
};

//FASTER

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicatesIII(nums) {
  let result = [];
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (seen[num]) {
      result.push(num);
    }
    seen[num] = true;
  }
  return result;
};
