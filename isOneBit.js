//From 717 in LeetCode

/**
 * @param {number[]} bits
 * @return {boolean}
 */
function isOneBitCharacter(bits) {
  for (let i = 0; i < bits.length; i++) {
    if (i === bits.length - 1) {
      return true;
    }
    if (bits[i] === 1) {
      i++;
    }
  }
  return false;
}
