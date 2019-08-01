//From 917 in LeetCode

/**
 * @param {string} S
 * @return {string}
 */
function reverseOnlyLetters(S) {
  let result = [];
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let letters = S.split('')
    .filter(x => alphabet.includes(x.toLowerCase()))
    .reverse();
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    let curr = S[i];
    if (alphabet.includes(curr.toLowerCase())) {
      result.push(letters[count]);
      count++;
    } else {
      result.push(curr);
    }
  }
  return result.join('');
}
