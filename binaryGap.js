//From 868 in LeetCode

/**
 * @param {number} N
 * @return {number}
 */
function binaryGap(N) {
  let binary = N.toString(2);
  let distance = 0;
  let index = null;
  for (let j = 0; j < binary.length; j++) {
    if (binary[j] / 1 === 1) {
      if (index !== null) {
        distance = Math.max(Math.abs(index - j), distance);
      }
      index = j;
    }
  }

  return distance;
}
