//From 1704 in LeetCode

/**
 * @param {string} s
 * @return {boolean}
 */
function halvesAreAlike(s) {
  const VOWELS = 'aeiouAEIOU'.split('').reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});
  let front = 0;
  let back = 0;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (VOWELS[s[i]]) {
      front++;
    }
  }
  for (let i = Math.floor(s.length / 2); i < s.length; i++) {
    if (VOWELS[s[i]]) {
      back++;
    }
  }
  return front === back;
}
