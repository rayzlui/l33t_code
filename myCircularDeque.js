//From 641 in LeetCode

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
class MyCircularDeque {
  constructor(k) {
    this.queue = [];
    this.size = k;
  }
}

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.queue.length < this.size) {
    this.queue = [value, ...this.queue];
    return true;
  } else {
    return false;
  }
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.queue.length < this.size) {
    this.queue = [...this.queue, value];
    return true;
  } else {
    return false;
  }
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.queue.length > 0) {
    let newQ = [];
    for (let i = 0; i < this.queue.length; i++) {
      if (i !== 0) {
        newQ[i - 1] = this.queue[i];
      }
    }
    this.queue = newQ;
    return true;
  } else {
    return false;
  }
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.queue.length > 0) {
    let newQ = [];
    for (let i = 0; i <= this.queue.length - 1; i++) {
      if (i !== this.queue.length - 1) {
        newQ[i] = this.queue[i];
      }
    }
    this.queue = newQ;
    return true;
  } else {
    return false;
  }
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.queue.length > 0) {
    return this.queue[0];
  } else {
    return -1;
  }
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.queue.length > 0) {
    return this.queue[this.queue.length - 1];
  } else {
    return -1;
  }
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.queue.length === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.queue.length === this.size;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
