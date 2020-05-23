//From 895 in LeetCode

class FreqStack {
  constructor() {
    this.count = {};
    this.freq = {};
    this.max = null;
  }
}

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  if (this.count[x]) {
    this.count[x]++;
  } else {
    this.count[x] = 1;
  }
  if (this.freq[this.count[x]]) {
    this.freq[this.count[x]].push(x);
  } else {
    this.freq[this.count[x]] = [x];
  }
  this.max = Math.max(this.max, this.count[x]);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  let max = this.freq[this.max].pop();
  if (this.freq[this.max].length === 0) {
    this.max--;
  }
  this.count[max]--;
  return max;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
