//From 819 in LeetCode

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

function removePunc(word) {
  let split = word.split('');
  return split
    .reduce((acc, current) => {
      if (
        current === '.' ||
        current === '?' ||
        current === ',' ||
        current === ' ' ||
        current === '!' ||
        current === ';' ||
        current === "'" ||
        current === '"'
      ) {
        return acc;
      } else {
        return acc + current;
      }
    }, '')
    .toLowerCase();
}
var mostCommonWord = function(paragraph, banned) {
  let ban = banned.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  let arr = paragraph
    .split(',')
    .join(' ')
    .split(' ')
    .map(x => removePunc(x));
  let wordCount = arr.reduce((acc, current) => {
    if (!ban[current] && current !== '') {
      acc[current] = acc[current] ? (acc[current] += 1) : 1;
      return acc;
    } else {
      return acc;
    }
  }, {});
  let highest;
  for (let a in wordCount) {
    if (highest === undefined) {
      highest = a;
    } else if (wordCount[a] > wordCount[highest]) {
      highest = a;
    }
  }
  return highest;
};
