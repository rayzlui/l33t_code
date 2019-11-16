//From 703 in LeetCode

/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  constructor(k, nums) {
    this.stores = nums.sort((x, y) => y - x).slice(0, k);
    this.k = k;
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.stores.length < this.k) {
    this.stores.push(val);
    this.stores = this.stores.sort((x, y) => y - x);
  } else {
    if (val > this.stores[this.stores.length - 1]) {
      for (let i = 0; i < this.k; i++) {
        if (val > this.stores[i]) {
          this.stores.splice(i, 0, val);
          this.stores.pop();
          break;
        }
      }
    }
  }
  return this.stores[this.stores.length - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
