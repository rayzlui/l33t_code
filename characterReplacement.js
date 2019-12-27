//From 424 in LeetCode

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  let result = 0;
  let currentChar = null;
  let holder = {};
  let string = '';
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (currentChar === null) {
      currentChar = current;
    }

    if (holder[current]) {
      holder[current]++;
    } else {
      holder[current] = 1;
    }
    string += current;
    if (string.length - holder[currentChar] > k) {
      string = string.substring(1);
      holder[currentChar]--;
      currentChar = string[0];
      result = Math.max(string.length, result);
    } else {
      result = Math.max(string.length, result);
    }
  }
  if (string.length - holder[currentChar] < k) {
    return Math.min(
      s.length,
      s.length + (k - (string.length - holder[currentChar])),
    );
  }
  return result;
}
