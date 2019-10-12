//From 541 in LeetCode

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let reverseStr = function(s, k) {
  let result = '';
  let twoK = 2 * k;
  for (let i = 0; i < s.length; i += twoK) {
    let subStringStart = s
      .substring(i, i + k)
      .split('')
      .reverse()
      .join('');
    let subStringEnd = s.substring(i + k, i + k + k);
    if (result === '') {
      result = subStringStart + subStringEnd;
    } else {
      result += subStringStart + subStringEnd;
    }
  }
  return result;
};
