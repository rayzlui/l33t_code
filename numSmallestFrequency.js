//From 1170 in LeetCode

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
function numSmallerByFrequency(queries, words) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .reduce((acc, curr, index) => {
      acc[curr] = index;
      return acc;
    }, {});
  let queriesLarge = queries.map(x => {
    let queriesCount = {};
    for (let i = 0; i < x.length; i++) {
      if (queriesCount[x[i]]) {
        queriesCount[x[i]]++;
      } else {
        queriesCount[x[i]] = 1;
      }
    }
    let keys = Object.keys(queriesCount);
    let lowest;
    keys.forEach(x => {
      if (lowest === undefined) {
        lowest = x;
      } else {
        if (alphabet[x] < alphabet[lowest]) {
          lowest = x;
        }
      }
    });
    return queriesCount[lowest];
  });
  let wordsLarge = words.map(x => {
    let wordsCount = {};
    for (let i = 0; i < x.length; i++) {
      if (wordsCount[x[i]]) {
        wordsCount[x[i]]++;
      } else {
        wordsCount[x[i]] = 1;
      }
    }
    let keys = Object.keys(wordsCount);
    let lowest;
    keys.forEach(x => {
      if (lowest === undefined) {
        lowest = x;
      } else {
        if (alphabet[x] < alphabet[lowest]) {
          lowest = x;
        }
      }
    });
    return wordsCount[lowest];
  });
  return queriesLarge.map(x => wordsLarge.filter(y => x < y).length);
};
