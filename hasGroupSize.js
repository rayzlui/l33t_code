//From 914 in LeetCode

/**
 * @param {number[]} deck
 * @return {boolean}
 */
function hasGroupsSizeX(deck) {
  let numCards = {};
  for (let i = 0; i < deck.length; i++) {
    let card = deck[i];
    if (numCards[card] === undefined) {
      numCards[card] = 1;
    } else {
      numCards[card]++;
    }
  } //they all need to be equal or at least multiple of each other.
  let hold = Object.values(numCards);
  for (let j = 2; j <= hold[0]; j++) {
    if (hold.every(x => x % j === 0)) {
      return true;
    }
  }
  return false;
}
