//From 792 in LeetCode

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
function numMatchingSubseq(S, words) {
  let result = words.filter(x => {
    let copy = S;
    for (let i = 0; i < x.length; i++) {
      let letter = x[i];
      let index = copy.indexOf(letter);
      if (index === -1) {
        return false;
      }
      copy = copy.substring(index + 1);
    }
    return true;
  });
  return result.length;
}
