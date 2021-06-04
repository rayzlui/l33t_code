//From 1880 in LeetCode

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
const alphabetVal = 'abcdefghijklmnopqrstuvwxyz'
  .split('')
  .reduce((acc, curr, index) => {
    acc[curr] = index;
    return acc;
  }, {});
var isSumEqual = function(firstWord, secondWord, targetWord) {
  let count1 = '';
  let count2 = '';
  let count3 = '';
  for (
    let i = 0;
    i < Math.max(firstWord.length, secondWord.length, targetWord.length);
    i++
  ) {
    if (firstWord[i]) {
      count1 += `${alphabetVal[firstWord[i]]}`;
    }
    if (secondWord[i]) {
      count2 += `${alphabetVal[secondWord[i]]}`;
    }
    if (targetWord[i]) {
      count3 += `${alphabetVal[targetWord[i]]}`;
    }
  }
  return count1 * 1 + count2 * 1 === count3 * 1;
};
