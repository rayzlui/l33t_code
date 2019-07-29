//From 566 in LeetCode

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
function matrixReshape(nums, r, c) {
  if (nums[0].length * nums.length !== r * c) {
    return nums;
  }
  let result = [];
  let row = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      row.push(nums[i][j]);
      if (row.length === c) {
        result.push(row);
        row = [];
      }
    }
  }
  return result;
}
