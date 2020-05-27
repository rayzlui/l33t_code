//From 1455 in LeetCode

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
function isPrefixOfWord(sentence, searchWord) {
  let arr = sentence.split(' ');
  arr.unshift(' ');
  return arr.findIndex(x => {
    let pref = x.substring(0, searchWord.length);
    if (pref === searchWord) {
      return true;
    }
    return false;
  });
}
