//From 1513 from LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function numSub(s) {
  let count = 0;
  let previousOnes = 0;
  for (let i = 0; i < s.length; i++) {
    let num = s[i];
    if (num === '1') {
      count++;
      if (previousOnes > 0) {
        count += previousOnes;
      }
      count = count % (10 ** 9 + 7);
      previousOnes++;
    } else {
      previousOnes = 0;
    }
  }
  return count;
}