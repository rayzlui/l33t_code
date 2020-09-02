//From 1561 in LeetCode

/**
 * @param {number[]} piles
 * @return {number}
 */
function maxCoins(piles) {
  piles = piles.sort((x, y) => y - x);
  let max = 0;
  while (piles.length > 0) {
    piles.shift();
    max += piles[0];
    piles.shift();
    piles.pop();
  }
  return max;
}
