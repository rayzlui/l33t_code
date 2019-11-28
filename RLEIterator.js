//From 900 in LeetCode

/**
 * @param {number[]} A
 */
class RLEIterator {
  constructor(A) {
    this.store = A;
  }
}

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
  while (n !== 0) {
    if (this.store.length === 0) {
      return -1;
    }
    let seq = this.store[0];
    if (seq === 0) {
      this.store.splice(0, 2);
    } else {
      let diff = seq - n;
      if (diff > 0) {
        this.store[0] -= n;
        return this.store[1];
      } else if (diff === 0) {
        let val = this.store[1];
        this.store.splice(0, 2);
        return val;
      } else {
        n = n - seq;
        this.store.splice(0, 2);
      }
    }
  }
};

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */
