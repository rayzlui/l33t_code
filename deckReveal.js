//From 950 in LeetCode

/**
 * @param {number[]} deck
 * @return {number[]}
 */
function deckRevealedIncreasing(deck) {
  let sort = deck.sort((x, y) => y - x);
  let result = [sort[0]];
  for (let i = 1; i < sort.length; i++) {
    let burnCard = result[result.length - 1];
    result.pop();
    result.unshift(burnCard);
    result.unshift(sort[i]);
  }
  return result;
}
