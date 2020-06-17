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

//cleaner

/**
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPricesII(prices) {
  let result = [];
  for (let i = 0; i < prices.length; i++) {
    let current = prices[i];
    let remainder = prices.slice(i + 1);
    let discount = remainder.find(x => x <= current);
    if (discount) {
      result.push(current - discount);
    } else {
      result.push(current);
    }
  }
  return result;
}

//faster

/**
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPricesIII(prices) {
  let result = [];
  let seen = [];
  for (let i = prices.length - 1; i >= 0; i--) {
    let current = prices[i];
    let discount = seen.find(x => x <= current);
    if (discount) {
      result.unshift(current - discount);
    } else {
      result.unshift(current);
    }
    seen.unshift(current);
  }
  return result;
}
