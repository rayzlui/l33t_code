//From 14 in LeetCode

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let prefix = '';
  if (strs.length === 0) {
    return prefix;
  }
  for (let i = 0; i < strs[0].length; i++) {
    let letter = strs[0][i];
    if (strs.every(x => x[i] === letter)) {
      prefix = prefix + letter;
    } else {
      return prefix;
    }
  }
  return prefix;
}
