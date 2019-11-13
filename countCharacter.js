//From 1160 in LeetCode

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  let search = chars.split('').reduce((acc, curr) => {
    if (acc[curr] !== undefined) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let result = 0;
  words.forEach(x => {
    let copy = Object.assign({}, search);
    let good = true;
    for (let i = 0; i < x.length; i++) {
      if (copy[x[i]] > 0) {
        copy[x[i]]--;
      } else {
        good = false;
        break;
      }
    }
    if (good) {
      result += x.length;
    }
  });
  return result;
}
