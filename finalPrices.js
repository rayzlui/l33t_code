//From 1475 in LeetCode

/**
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPrices(prices) {
  let result = [];
  for (let i = 0; i < prices.length; i++) {
    let current = prices[i];
    let remainder = prices.slice(i + 1);
    let needAdd = true;
    for (let j = 0; j < remainder.length; j++) {
      if (remainder[j] <= current) {
        result.push(current - remainder[j]);
        needAdd = false;
        break;
      }
    }
    if (needAdd) {
      result.push(current);
    }
  }
  return result;
}
