//From 389 in LeetCode

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
  let sObj = {};
  let tObj = {};
  for (let letter of s) {
    sObj[letter] = sObj[letter] === undefined ? 1 : (sObj[letter] += 1);
  }
  for (let letter of t) {
    tObj[letter] = tObj[letter] === undefined ? 1 : (tObj[letter] += 1);
    if (sObj[letter] === undefined || tObj[letter] > sObj[letter]) {
      return letter;
    }
  }
}
