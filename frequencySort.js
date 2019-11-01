//From 451 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
  let counts = {};
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (counts[current]) {
      counts[current]++;
    } else {
      counts[current] = 1;
    }
  }
  let array = s.split('').sort((x, y) => counts[y] - counts[x]);
  let noDups = Array.from(new Set(array));
  let result = '';
  for (let i = 0; i < noDups.length; i++) {
    let current = noDups[i];
    let count = counts[current];
    for (let i = 0; i < count; i++) {
      result += current;
    }
  }
  return result;
}
