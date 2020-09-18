//From 1447 in LeetCode

/**
 * @param {number} n
 * @return {string[]}
 */
function hasSharedDenom(small, larger) {
  for (let i = 2; i <= small / 2; i++) {
    if (larger % i === 0 && small % i === 0) {
      return false;
    }
  }
  return true;
}
function simplifiedFractions(n) {
  let fractions = [];
  for (let i = 2; i <= n; i++) {
    fractions.push(`1/${i}`);
    for (let j = 2; j < i; j++) {
      if (i % j !== 0) {
        if (hasSharedDenom(j, i)) {
          fractions.push(`${j}/${i}`);
        }
      }
    }
  }
  return fractions;
}
