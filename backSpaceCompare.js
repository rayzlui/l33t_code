//From leetcode 844

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
let backspaceCompare = function(S, T) {
  function typesString(string) {
    let result = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '#') {
        result.pop();
      } else {
        result.push(string[i]);
      }
    }
    return result.join('');
  }
  let s = typesString(S);
  let t = typesString(T);
  return s === t;
};
