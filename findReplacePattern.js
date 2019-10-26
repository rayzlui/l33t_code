//From 890 in LeetCode

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function findAndReplacePattern(words, pattern) {
  let result = [];
  let length = pattern.length;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let word2patt = {};
    let patt2word = {};
    if (word.length === length) {
      let i = 0;
      for (; i < length; i++) {
        let letter = word[i];
        let patt = pattern[i];
        let towardsPatt = word2patt[letter];
        let pattReverse = patt2word[patt];
        if (towardsPatt !== patt && towardsPatt !== undefined) {
          break;
        }
        if (patt2word[patt] !== letter && pattReverse !== undefined) {
          break;
        }
        word2patt[letter] = patt;
        patt2word[patt] = letter;
      }
      if (i === length) {
        result.push(word);
      }
    }
  }
  return result;
}
