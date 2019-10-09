//From 392 in LeetCode

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let location = t.indexOf(current);

    if (location === -1) {
      return false;
    } else {
      t = t.substring(location + 1);
    }
  }
  return true;
};
