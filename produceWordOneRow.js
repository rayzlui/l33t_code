//From 500 in LeetCode

/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
  let row1 = 'qwertyuiop'.split('');
  let row2 = 'asdfghjkl'.split('');
  let row3 = 'zxcvbnm.'.split('');
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split('');
    if (
      word.every(x => row1.includes(x.toLowerCase())) ||
      word.every(y => row2.includes(y.toLowerCase())) ||
      word.every(z => row3.includes(z.toLowerCase()))
    ) {
      result.push(word.join(''));
    }
  }
  return result;
}
