//From 284 in LeetCode

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
class PeekingIterator {
  constructor(iterator) {
    this.elements = iterator;
    this.peeked = null;
  }
}

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  if (this.peeked) {
    return this.peeked;
  }
  this.peeked = this.elements.next();
  return this.peeked;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  if (this.peeked) {
    let show = this.peeked;
    this.peeked = null;
    return show;
  }
  return this.elements.next();
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  if (this.peeked) {
    return true;
  }
  return this.elements.hasNext();
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
