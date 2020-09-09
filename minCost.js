//From 1578 in LeetCode

/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
function minCost(s, cost) {
  let result = 0;
  let pointerOne = 0;
  let pointerTwo = 1;
  let dupSum = 0;
  let dupMax = 0;
  while (pointerOne < s.length) {
    if (s[pointerOne] !== s[pointerTwo]) {
      result += dupSum - dupMax;
      pointerOne = pointerTwo;
      pointerTwo++;
      dupSum = 0;
      dupMax = 0;
    } else {
      let newCost = cost[pointerTwo];
      dupSum = dupSum === 0 ? cost[pointerOne] : dupSum;
      dupSum += newCost;
      dupMax = Math.max(cost[pointerOne], dupMax, newCost);
      pointerTwo++;
    }
  }
  return result;
}
