//From 953 in LeetCode

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    let x = 0;
    let y = 0;
    let first = order.indexOf(words[i][x]);
    let second = order.indexOf(words[i + 1][y]);
    if (first > second) {
      return false;
    }

    while (first === second) {
      x++;
      y++;
      let front = order.indexOf(words[i][x]);
      let back = order.indexOf(words[i + 1][y]);
      if (front > back) {
        return false;
      }
    }
  }
  return true;
};
