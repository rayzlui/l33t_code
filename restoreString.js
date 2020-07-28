//From 1528 in LeetCode

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
function restoreString(s, indices) {
  let string = [];
  indices.forEach((x, i) => (string[x] = s[i]));
  return string.join('');
}
