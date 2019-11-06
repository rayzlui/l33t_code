//From 171 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  .toUpperCase()
  .split('')
  .reduce((acc, curr, index) => {
    acc[curr] = index + 1;
    return acc;
  }, {});
function titleToNumber(s) {
  let row = 0;
  if (s.length === 1) {
    return alphabet[s];
  }
  for (let i = 0; i < s.length - 1; i++) {
    let letter = s[i];
    let value = alphabet[letter];
    let length = s.length - i - 1;
    row += value * 26 ** length;
  }
  row += alphabet[s[s.length - 1]];
  return row;
};
