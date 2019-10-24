//From 168 in LeetCode

/**
 * @param {number} n
 * @return {string}
 */
function convertToTitle(n) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  alphabet = alphabet.reduce((acc, curr, index) => {
    acc[index] = curr;
    return acc;
  }, {});
  if (n <= 26) {
    return alphabet[n - 1];
  }
  let code = [];
  while (n > 26) {
    let back = n % 26;
    if (back === 0) {
      code.unshift(26);
      n = n - 26;
    }
    code.unshift(back);
    n = n - back;
    if (n >= 26) {
      n = n / 26;
    }
  }
  return alphabet[n - 1] + code.map(x => alphabet[x - 1]).join('');
}
