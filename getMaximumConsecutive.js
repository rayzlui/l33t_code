//From 1798 in LeetCode

/**
 * @param {number[]} coins
 * @return {number}
 */
function getMaximumConsecutive(coins) {
  coins.sort((x, y) => x - y);
  let result = 0;
  for (let i = 0; i < coins.length; i++) {
    if (result + 1 >= coins[i]) {
      result += coins[i];
    } else {
      break;
    }
  }

  return result + 1;
}
