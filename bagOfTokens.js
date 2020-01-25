//From 948 in LeetCode

/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
function bagOfTokensScore(tokens, P) {
  if (tokens.length === 0) {
    return 0;
  }
  let sortedTokens = tokens.sort((x, y) => x - y);
  if (sortedTokens[0] > P) {
    return 0;
  }
  let points = 1;
  let power = P - sortedTokens.shift();
  for (let i = 0; i < sortedTokens.length; ) {
    if (sortedTokens.length === 1) {
      break;
    }
    let lowest = sortedTokens[0];
    let highest = sortedTokens[sortedTokens.length - 1];
    if (power < lowest) {
      if (highest > lowest) {
        points--;
        power += highest;
        sortedTokens.pop();
      } else {
        return points;
      }
    } else {
      power -= sortedTokens.shift();
      points++;
    }
  }
  return sortedTokens[0] <= power ? points + 1 : points;
}
