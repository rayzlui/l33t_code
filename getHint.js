//From 299 in LeetCode

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint(secret, guess) {
  let info = secret.split('').reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    let g = guess[i];
    if (g === secret[i]) {
      bulls++;
      if (info[g] <= 0) {
        cows--;
      }
      info[g]--;
    } else if (info[g] > 0) {
      cows++;
      info[g]--;
    }
  }
  return `${bulls}A${cows}B`;
}
