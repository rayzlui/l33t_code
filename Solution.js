//From 398 in LeetCode

/**
 * @param {number[]} nums
 */
class Solution {
  construtor(nums) {
    this.stored = nums.reduce((acc, curr, index) => {
      if (acc[curr]) {
        acc[curr].push(index);
      } else {
        acc[curr] = [index];
      }
      return acc;
    }, {});
  }
}

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  let arr = this.stored[target];
  let length = arr.length;
  return arr[Math.floor(Math.random() * length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
