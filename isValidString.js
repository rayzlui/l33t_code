//From 1003 in LeetCode

/**
 * @param {string} S
 * @return {boolean}
 */
function isValid(S) {
  let index = S.indexOf('abc');
  while (index !== -1) {
    let arr = S.split('');
    arr.splice(index, 3);
    S = arr.join('');
    index = S.indexOf('abc');
  }
  return S === '';
}

//faster

/**
 * @param {string} S
 * @return {boolean}
 */
var isValidII = function(S) {
  let i = 0;
  let replace = S.replace('abc', '');
  while (i < S.length) {
    let newReplace = replace.replace('abc', '');
    if (newReplace.length === 0) {
      return true;
    }
    if (newReplace === replace) {
      return false;
    }
    replace = newReplace;
    i++;
  }
};
