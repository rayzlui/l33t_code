//From 1529 in LeetCode

/**
 * @param {string} target
 * @return {number}
 */
function minFlips(target) {
  let count = 0;
  let isFlip = 0;
  for (let i = 0; i < target.length; i++) {
    let light = target[i] / 1;
    if (light !== isFlip) {
      isFlip = (isFlip + 1) % 2;
      count++;
    }
  }
  return count;
}
