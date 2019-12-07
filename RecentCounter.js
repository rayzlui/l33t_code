//From 933 in LeetCode

class RecentCounter {
  constructor() {
    this.counter = [];
  }
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  let counter = this.counter;
  counter.push(t);
  let count = 0;
  for (let i = counter.length - 1; i >= 0; i--) {
    if (t - counter[i] <= 3000) {
      count++;
    } else {
      break;
    }
  }
  return count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
