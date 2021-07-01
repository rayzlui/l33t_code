//From 1893 in LeetCode

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
function isCovered(ranges, left, right) {
  let foundStart = false;
  ranges.sort((x, y) => x[0] - y[0]);

  let max = 0;
  for (let i = 0; i < ranges.length; i++) {
    let previous = ranges[i - 1];
    let current = ranges[i];
    if (foundStart === false) {
      if (left >= current[0] && left <= current[1]) {
        foundStart = true;
        max = current[1];
        if (right <= current[current.length - 1]) {
          return true;
        }
      }
    } else {
      if (current[0] > max + 1) {
        return false;
      }
      max = Math.max(current[1], max);
    }
  }
  if (right <= max) {
    return true;
  }
  return false;
}
