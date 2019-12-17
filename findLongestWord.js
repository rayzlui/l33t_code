//From 524 in LeetCode

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
function findLongestWord(s, d) {
  d = d.sort((x, y) => {
    if (y.length === x.length) {
      return x.localeCompare(y);
    } else {
      return y.length - x.length;
    }
  });
  for (let i = 0; i < d.length; i++) {
    let word = d[i];
    let dict = s;
    let works = true;
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      let index = dict.indexOf(letter);
      if (index === -1) {
        works = false;
        break;
      }
      dict = dict.slice(index + 1);
    }
    if (works) {
      return word;
    }
  }
  return '';
}
