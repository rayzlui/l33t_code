//From 1048 in LeetCode

/**
 * @param {string[]} words
 * @return {number}
 */
function longestStrChain(words) {
  //start reverse, recursion through finding words that are one less than previous, break when the source amount is less than the greatest
  let dictionary = words.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  words = words.sort((x, y) => y.length - x.length);
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    function recursion(branch, count) {
      if (!dictionary[branch]) {
        return;
      }
      for (let i = 0; i < branch.length; i++) {
        let array = branch.split('');
        array.splice(i, 1);
        let newWord = array.join('');
        if (dictionary[newWord]) {
          recursion(newWord, count + 1);
          dictionary[newWord] = false;
        } else {
          max = Math.max(max, count);
        }
      }
    }
    recursion(words[i], 1);
  }
  return max;
}
