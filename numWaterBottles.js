//From 1518 in LeetCode

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles(numBottles, numExchange) {
  let drank = 0;
  let holding = 0;
  while (numBottles > 0) {
    drank += numBottles;
    let newBottles = Math.floor((numBottles + holding) / numExchange);
    holding = (numBottles + holding) % numExchange;
    numBottles = newBottles;
  }
  return drank;
}
