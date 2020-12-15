//From 1688 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function numberOfMatches(n) {
  let played = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      played += n / 2;
      n = n / 2;
    } else {
      let half = Math.floor(n / 2);
      played += half;
      n = half + 1;
    }
  }
  return played;
}
