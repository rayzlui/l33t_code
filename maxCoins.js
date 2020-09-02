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

//faster

/**
 * @param {number[]} piles
 * @return {number}
 */
function maxCoinsII(piles) {
  piles = piles.sort((x, y) => y - x).slice(0, (piles.length / 3) * 2);
  return piles.reduce((acc, curr, index) => {
    if (index % 2 === 1) {
      acc += curr;
    }
    return acc;
  }, 0);
}

//faster

/**
 * @param {number[]} piles
 * @return {number}
 */
function maxCoinsIII(piles) {
  piles = piles.sort((x, y) => y - x);
  let stop = (piles.length / 3) * 2;
  let max = 0;
  for (let i = 0; i < stop; i++) {
    if (i % 2 === 1) {
      max += piles[i];
    }
  }
  return max;
}
