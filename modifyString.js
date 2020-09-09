//From 1576 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let alphabetIndex = alphabet.reduce((acc, curr, index) => {
  acc[curr] = index;
  return acc;
}, {});
function modifyString(s) {
  let string = '';
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current === '?') {
      let left = i - 1;
      let right = i + 1;
      let copy = alphabet.slice();
      if (left >= 0) {
        copy.splice(alphabetIndex[string[left]], 1);
      }
      if (right < s.length) {
        copy.splice(alphabetIndex[s[right]], 1);
      }
      string += copy[0];
    } else {
      string += current;
    }
  }
  return string;
}
