//From 1812 in LeetCode

/**
 * @param {string} coordinates
 * @return {boolean}
 */
function squareIsWhite(coordinates) {
  let odds = 'aceg'.split('').reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  //we look up letter, if it's defined, then its odd
  let letter = coordinates[0];
  let num = coordinates[1];
  if (odds[letter]) {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  } else {
    if (num % 2 === 0) {
      return false;
    }
    return true;
  }
}
