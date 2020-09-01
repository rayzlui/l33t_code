//From 1163 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function lastSubstring(s) {
  let i = 0;
  let j = 1;
  let k = 0;
  while (j + k < s.length) {
    if (s[i + k] === s[j + k]) {
      k++;
    } else if (s[i + k] < s[j + k]) {
      i = j;
      j++;
      k = 0;
    } else {
      j += k + 1;
      k = 0;
    }
  }
  return s.substring(i);
}
