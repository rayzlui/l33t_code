//From 1523 in LeetCode

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countOdds(low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 === 1) {
      count++;
    }
  }
  return count;
}

//faster

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countOddsII(low, high) {
  let diff = high - low;
  if (diff % 2 === 1) {
    return Math.ceil(diff / 2);
  }
  return low % 2 === 1 ? diff / 2 + 1 : diff / 2;
}
