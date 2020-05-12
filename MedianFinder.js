//From 295 in LeetCode

/**
 * initialize your data structure here.
 */
class MedianFinder {
  constructor() {
    this.data = [];
  }
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  let index = this.data.findIndex(x => x >= num);
  if (index !== -1) {
    this.data.splice(index, 0, num);
  } else {
    this.data.push(num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let length = this.data.length;
  if (length % 2 === 0) {
    return (
      (this.data[Math.floor(length / 2)] +
        this.data[Math.floor(length / 2) - 1]) /
      2
    );
  }
  return this.data[Math.floor(length / 2)];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
