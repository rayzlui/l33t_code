//From 647 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
  let count = 0;
  let seen = {};
  for (let i = 0; i < s.length; i++) {
    let start = s[i];
    count++;
    for (let j = i + 1; j < s.length; j++) {
      start = start + s[j];
      if (seen[start] === undefined) {
        seen[start] =
          start ===
          start
            .split('')
            .reverse()
            .join('');
      }
      if (seen[start]) {
        count++;
      }
    }
  }
  return count;
}
