//From 1686 in LeetCode

/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
function stoneGameVI(aliceValues, bobValues) {
  let totalSum = aliceValues.map((x, index) => [x + bobValues[index], index]);
  totalSum.sort((x, y) => y[0] - x[0]);
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < totalSum.length; i++) {
    if (i % 2 === 0) {
      alice += aliceValues[totalSum[i][1]];
    } else {
      bob += bobValues[totalSum[i][1]];
    }
  }
  if (alice === bob) {
    return 0;
  } else if (alice > bob) {
    return 1;
  } else {
    return -1;
  }
}
