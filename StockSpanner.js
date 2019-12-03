//From 901 in LeetCode

class StockSpanner {
  constructor() {
    this.prices = [];
  }
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let consecutive = 1;
  for (let i = 0; i < this.prices.length; i++) {
    if (this.prices[i] <= price) {
      consecutive++;
    } else {
      break;
    }
  }
  this.prices.unshift(price);
  return consecutive;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
