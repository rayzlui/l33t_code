//From 1357 in LeetCode

/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
class Cashier {
  constructor(n, discount, products, prices) {
    this.count = 0;
    this.special = n;
    this.discount = discount;
    this.costs = products.reduce((acc, x, index) => {
      acc[x] = prices[index];
      return acc;
    }, {});
  }
}

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
  let bill = product.reduce((acc, curr, index) => {
    let price = this.costs[curr];
    acc += price * amount[index];
    return acc;
  }, 0);
  this.count++;
  if (this.count === this.special) {
    bill = bill - (bill * this.discount) / 100;
    this.count = 0;
  }
  return bill;
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */
