//From 858 in LeetCode

/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
function mirrorReflection(p, q) {
  if (q === 0) {
    return 0;
  }
  let flips = 0;
  let reverse = 0;
  let orginal = q;
  while (q % p !== 0) {
    reverse++;
    q += orginal;
    if (q > p) {
      flips++;
      q = q % p;
    }
  }
  if (reverse % 2 === 0) {
    if (flips % 2 === 0) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return 2;
  }
}
