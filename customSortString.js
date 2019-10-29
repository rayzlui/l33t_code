//From 791 in LeetCode

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
function customSortString(S, T) {
  let array = T.split('');
  let answer = [];
  for (let i = 0; i < S.length; i++) {
    let index = array.indexOf(S[i]);
    while (index !== -1) {
      array.splice(index, 1);
      answer.push(S[i]);
      index = array.indexOf(S[i]);
    }
  }
  return answer.join('') + array.join('');
}
