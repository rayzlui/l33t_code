//From 1021 in LeetCode

/**
 * @param {string} S
 * @return {string}
 */
function removeOuterParentheses(S) {
  let counter = 0;
  let result = [];
  let decomp = S.split('');
  for (let i = 0; i < decomp.length; i++) {
    if (decomp[i] === '(') {
      counter++;
    }
    if (decomp[i] === ')') {
      counter--;
    }
    if (counter === 0) {
      let part = decomp.splice(0, i + 1);
      part.pop();
      part.shift();
      result.push(part.join(''));
      i = -1;
    }
  }
  return result.join('');
}
