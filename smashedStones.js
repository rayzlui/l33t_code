//From 1046 in LeetCode

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
  while (stones.length > 1) {
    let largest = Math.max(...stones);
    stones.splice(stones.indexOf(largest), 1);
    let slargest = Math.max(...stones);
    stones.splice(stones.indexOf(slargest), 1);
    let smashed = largest - slargest;
    if (smashed > 0) {
      stones.push(smashed);
    }
  }

  return stones;
}
