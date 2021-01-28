//From 1670 in LeetCode

class FrontMiddleBackQueue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.queue.unshift(val);
  this.size++;
  return null;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  let middle = Math.floor(this.size / 2);
  this.queue.splice(middle, 0, val);
  this.size++;
  return null;
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.queue.push(val);
  this.size++;
  return null;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  if (this.size < 1) {
    return -1;
  }
  this.size--;
  return this.queue.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if (this.size < 1) {
    return -1;
  }
  let middle = Math.floor((this.size - 1) / 2);

  this.size--;
  return this.queue.splice(middle, 1);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  if (this.size < 1) {
    return -1;
  }
  this.size--;
  return this.queue.pop();
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
