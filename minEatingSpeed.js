//From 875 in LeetCode

/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
function minEatingSpeed(piles, H) {
  let max = Math.max(...piles);
  let base = 0;

  while (base < max) {
    let mid = Math.floor((max + base) / 2);
    let days = 0;

    for (let i = 0; i < piles.length; i++) {
      let value = Math.ceil(piles[i] / mid);
      days += value;
    }

    if (days > H) {
      base = mid + 1;
    } else {
      max = mid;
    }
  }

  return base;
}
