//From 748 in LeetCode

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
function shortestCompletingWord(licensePlate, words) {
  let letters = licensePlate
    .toLowerCase()
    .split('')
    .filter(x => x * 0 !== 0 && x !== ' ');
  let result = null;
  for (let i = 0; i < words.length; i++) {
    const word = words[i].split('');
    let wordGood = true;
    for (let j = 0; j < letters.length; j++) {
      if (!word.includes(letters[j])) {
        wordGood = false;
        break;
      } else {
        word.splice(word.indexOf(letters[j]), 1);
      }
    }
    if (wordGood) {
      result =
        result === null
          ? words[i]
          : result.length > words[i].length
          ? words[i]
          : result;
    }
  }
  return result;
}
