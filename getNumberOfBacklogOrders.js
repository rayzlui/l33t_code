//From 1801 in LeetCode

/**
 * @param {number[][]} orders
 * @return {number}
 */

function binaryPlacement(array, num) {
  let low = 0;
  let high = array.length - 1;
  if (num < array[low]) {
    array.unshift(num);
    return array;
  }
  if (num > array[high]) {
    array.push(num);
    return array;
  }
  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    if (num > array[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  array.splice(high, 0, num);
  return array;
}
function getNumberOfBacklogOrders(orders) {
  let buy = {};
  let sell = {};
  let buyOrder = [];
  let sellOrder = [];
  let total = BigInt(0);
  const MOD = BigInt(10 ** 9 + 7);
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    let price = order[0];
    let amount = BigInt(order[1]);
    let type = order[2];

    if (type) {
      for (let i = buyOrder.length - 1; i >= 0; ) {
        let val = buyOrder[i];
        if (val >= price) {
          let amountBuy = buy[val];
          if (amountBuy > amount) {
            buy[val] -= amount;
            total = total - amount;
            amount = 0;
            break;
          } else {
            amount -= buy[val];
            total = total - buy[val];
            delete buy[val];
            buyOrder.pop();
            i--;
          }
        } else {
          break;
        }
      }
      if (amount > 0) {
        sell[price] = sell[price] ? sell[price] + amount : amount;
        total = total + amount;
        sellOrder = binaryPlacement(sellOrder, price);
      }
    } else {
      for (let i = 0; i < sellOrder.length; ) {
        let val = sellOrder[i];
        if (val <= price) {
          let amountSell = sell[val];
          if (amountSell > amount) {
            sell[val] -= amount;
            total = total - amount;
            amount = 0;
            break;
          } else {
            amount -= sell[val];
            total = total - sell[val];
            delete sell[val];
            sellOrder.shift();
          }
        } else {
          break;
        }
      }
      if (amount > 0) {
        buy[price] = buy[price] ? buy[price] + amount : amount;
        total = total + amount;
        buyOrder = binaryPlacement(buyOrder, price);
      }
    }
  }
  return total % MOD;
}
