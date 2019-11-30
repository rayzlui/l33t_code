//From 846 in LeetCode

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
function isNStraightHand(hand, W) {
  hand = hand.sort((x, y) => x - y);

  for (let j = 0; j < hand.length; ) {
    let current = hand[0];
    for (let i = 1; i < W; i++) {
      let index = hand.indexOf(current + i);
      if (index === -1) {
        return false;
      } else {
        hand.splice(index, 1);
      }
    }
    hand.splice(0, 1);
  }
  return true;
}
