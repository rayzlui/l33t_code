//From 1526 in LeetCode

/**
 * @param {number[]} target
 * @return {number}
 */
function minNumberOperations(target) {
  let count = target[0];
  let lowest = target[0];
  for (let i = 1; i < target.length; i++) {
    if (target[i] > lowest) {
      count += target[i] - lowest;
      lowest = target[i];
    } else {
      lowest = target[i];
    }
  }
  return count;
}
