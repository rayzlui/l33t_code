//From 1599 in LeetCode

/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
function minOperationsMaxProfit(customers, boardingCost, runningCost) {
  let profit = 0;
  let maxProfit = 0;
  let waiting = customers[0];
  let line = 1;
  let turns = 0;
  let profitableTurns = -1;
  while (waiting === 0) {
    waiting += customers[line];
    turns++;
    line++;
  }
  while (waiting > 0) {
    let boarding = waiting >= 4 ? 4 : waiting;
    waiting -= boarding;
    turns++;

    profit += boarding * boardingCost - runningCost;
    if (profit > maxProfit) {
      maxProfit = profit;
      profitableTurns = turns;
    }
    if (line < customers.length) {
      waiting += customers[line];
      line++;
    }
  }
  return profitableTurns;
}
