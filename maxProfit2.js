//For 121 in LeetCode

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let max = 0;
  let min = 100000000;
  for (let i = 0; i < prices.length; i++) {
    let current = prices[i];
    min = Math.min(min, current);
    if (current - min > max) {
      max = current - min;
    }
  }
  return max;
}
