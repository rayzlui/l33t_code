//From 1309 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  .split('')
  .reduce((acc, curr, index) => {
    let key = index + 1;
    if (index >= 9) {
      key = key + '#';
      acc[key] = curr;
    } else {
      acc[key] = curr;
    }
    return acc;
  }, {});
function freqAlphabets(s) {
  let reverse = s.split('').reverse();
  let result = [];
  for (let i = 0; i < reverse.length; i++) {
    if (reverse[i] === '#') {
      let key = reverse[i + 2] + reverse[i + 1] + reverse[i];
      result.push(alphabet[key]);
      i += 2;
    } else {
      result.push(alphabet[reverse[i]]);
    }
  }
  return result.reverse().join('');
}
