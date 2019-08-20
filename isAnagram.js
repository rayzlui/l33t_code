//From 242 in LeetCode

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sObj = {};
  for (let letter of s) {
    sObj[letter] = sObj[letter] === undefined ? 1 : (sObj[letter] += 1);
  }
  for (let letter of t) {
    if (sObj[letter] === undefined) {
      return false;
    }

    sObj[letter]--;

    if (sObj[letter] < 0) {
      return false;
    }
  }
  return true;
}
