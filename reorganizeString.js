//From 767 in LeetCode

/**
 * @param {string} S
 * @return {string}
 */
function reorganizeString(S) {
  let count = {};
  for (let i = 0; i < S.length; i++) {
    let letter = S[i];
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }
  let keys = Object.keys(count);
  keys = keys.sort((x, y) => count[y] - count[x]);
  if (count[keys[0]] > S.length - count[keys[0]] + 1) {
    return '';
  }
  let result = '';
  while (keys.length > 0) {
    let first = keys[0];
    let second = keys[1];
    if (second) {
      result[result.length - 1] === first
        ? (result += second)
        : (result += first);

      result[result.length - 1] === second
        ? (result += first)
        : (result += second);
    } else {
      result += first;
    }
    count[first]--;
    count[second]--;
    if (count[second] === 0) {
      keys.splice(1, 1);
    }
    if (count[first] === 0) {
      keys.shift();
    }
    keys = keys.sort((x, y) => count[y] - count[x]);
  }
  return result;
}
