//From 303 in LeetCode

/**
 * @param {number[]} nums
 */
class NumArray {
  constructor(nums) {
    this.nums = nums;
    this.sums = [];
    nums.reduce((acc, curr) => {
      acc = acc + curr;
      this.sums.push(acc);
      return acc;
    }, 0);
  }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === j) {
    return this.nums[j];
  }
  if (i === 0) {
    return this.sums[j];
  }
  return this.sums[j] - this.sums[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
