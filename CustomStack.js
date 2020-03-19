//From 1381 in LeetCode

/**
 * @param {number} maxSize
 */
class CustomStack {
  constructor(maxSize) {
    this.max = maxSize;
    this.stack = [];
  }
}

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.stack.length < this.max) {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.stack.length > 0) {
    let val = this.stack.pop();
    return val;
  }
  return -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  this.stack = this.stack.map((x, index) => {
    if (index < k) {
      return x + val;
    }
    return x;
  });
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

//faster

/**
 * @param {number} maxSize
 */
class CustomStackII {
  constructor(maxSize) {
    this.max = maxSize;
    this.stack = [];
  }
}

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.stack.length < this.max) {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.stack.length > 0) {
    let val = this.stack.pop();
    return val;
  }
  return -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  let min = k < this.stack.length ? k : this.stack.length;
  for (let i = 0; i < min; i++) {
    this.stack[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
