//From 1624 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function maxLengthBetweenEqualCharacters(s) {
  let counts = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (counts[letter]) {
      counts[letter][1] = i;
    } else {
      counts[letter] = [i];
    }
  }
  let max = -1;
  let possible = Object.keys(counts)
    .filter(x => counts[x].length > 1)
    .forEach(y => {
      let indices = counts[y];
      max = Math.max(max, indices[1] - indices[0] - 1);
    });
  return max;
}
