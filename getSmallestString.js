//From 1663 in LeetCode

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  .split('')
  .reduce((acc, curr, index) => {
    acc[index + 1] = curr;
    return acc;
  }, {});
function getSmallestString(n, k) {
  let result = '';
  while (n > 1) {
    let remainder = n - 1;
    if (remainder * 26 >= k) {
      result += 'a';
      k--;
    } else {
      let last = k - remainder * 26;
      result += alphabet[last];
      for (let i = 0; i < n - 1; i++) {
        result += 'z';
      }
      return result;
    }
    n--;
  }
  result += alphabet[k];
  return result;
}
