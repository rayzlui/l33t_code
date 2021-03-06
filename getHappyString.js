//From 1415 from LeetCode

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getHappyString(n, k) {
  let words = [];
  let letters = ['a', 'b', 'c'];
  function recursion(word) {
    if (word.length === n) {
      words.push(word);
      return;
    }
    for (let i = 0; i < letters.length; i++) {
      if (word[word.length - 1] !== letters[i]) {
        recursion(word + letters[i]);
      }
    }
  }
  recursion('');
  return words[k - 1] ? words[k - 1] : '';
}

//faster
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getHappyStringII(n, k) {
  let words = [];
  let letters = ['a', 'b', 'c'];
  function recursion(word) {
    if (word.length === n) {
      words.push(word);
      return words.length === k ? true : false;
    }
    for (let i = 0; i < letters.length; i++) {
      if (word[word.length - 1] !== letters[i]) {
        let shouldBreak = recursion(word + letters[i]);
        if (shouldBreak) {
          return true;
        }
      }
    }
  }
  recursion('');
  return words[k - 1] ? words[k - 1] : '';
}
