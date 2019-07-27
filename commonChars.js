//From 1102 in LeetCode

/**
 * @param {string[]} A
 * @return {string[]}
 */
function commonChars(A) {
  //we just need to check the first word, because if it's not in the first word it doesn't matter because it won't be in all the words. duh.
  let result = [];
  let firstWord = A[0].split('');
  let otherWords = A.splice(1);
  let lettersOthers = otherWords.map(word => word.split(''));

  for (let j = 0; j < firstWord.length; j++) {
    let possible = lettersOthers.every(word =>
      word.some(letter => letter === firstWord[j]),
    );
    if (possible) {
      result.push(firstWord[j]);
      lettersOthers = lettersOthers.map(word => {
        let remove = word.indexOf(firstWord[j]);
        word.splice(remove, 1);
        return word;
      });
    }
  }
  return result;
}
