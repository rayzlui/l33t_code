//From 1011 in LeetCode

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
function shipWithinDays(weights, D) {
  let max = Math.max(...weights);
  let canShip = false;
  while (!canShip) {
    let current = 0;
    let days = 1;
    for (let i = 0; i < weights.length; i++) {
      if (current + weights[i] > max) {
        days++;
        current = 0;
      }
      current += weights[i];
    }
    if (days > D) {
      max++;
    } else {
      canShip = true;
    }
  }
  return max;
}

//faster

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
function shipWithinDaysII(weights, D) {
  let max = Math.max(...weights);
  let sum = weights.reduce((acc, curr) => acc + curr, 0);
  while (max < sum) {
    let mid = Math.floor((max + sum) / 2);
    let current = 0;
    let days = 1;
    for (let i = 0; i < weights.length; i++) {
      if (current + weights[i] > mid) {
        days++;
        current = 0;
      }
      current += weights[i];
    }
    if (days > D) {
      max = mid + 1;
    } else {
      sum = mid;
    }
  }
  return max;
}
