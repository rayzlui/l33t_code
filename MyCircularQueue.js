//From 622 in LeetCode

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.marker = 0;
  }
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.marker === this.queue.length) {
    return false;
  } else {
    this.queue[this.marker] = value;
    this.marker++;
    return true;
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.marker === 0) {
    return false;
  } else {
    for (let i = 0; i < this.marker; i++) {
      this.queue[i] = this.queue[i + 1];
    }
    this.marker--;
    return true;
  }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.marker === 0) {
    return -1;
  }
  return this.queue[0];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.marker === 0) {
    return -1;
  }
  return this.queue[this.marker - 1];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.marker === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.marker === this.queue.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
