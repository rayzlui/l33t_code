//From 384 in LeetCode

/**
 * @param {number[]} nums
 */
class Solution {
  constructor(nums) {
    this.store = nums;
  }
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.store;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let length = this.store.length;
  let shuffle = [];
  let called = {};
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * length);
    while (called[random]) {
      random = Math.floor(Math.random() * length);
    }
    called[random] = true;
    shuffle.push(this.store[random]);
  }
  return shuffle;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
