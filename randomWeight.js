//From 528 in LeetCode

/**
 * @param {number[]} w
 */
class Solution {
  constructor(w) {
    let sum = 0;
    this.indices = w.reduce((acc, curr, index) => {
      sum += curr;
      acc[sum] = index;
      return acc;
    }, {});
    this.sum = sum;
    this.keys = Object.keys(this.indices);
  }
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  let rand = Math.floor(Math.random() * this.sum);
  let value = this.keys.find(x => x > rand);
  return this.indices[value];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
