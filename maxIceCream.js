//From 1833 in LeetCode

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
function maxIceCream(costs, coins) {
  costs.sort((x, y) => x - y);
  let iceCreams = 0;
  let i = 0;
  while (coins > 0 && i < costs.length) {
    iceCreams++;
    coins -= costs[i];
    i++;
  }
  if (coins < 0) {
    iceCreams--;
  }
  return iceCreams;
}
