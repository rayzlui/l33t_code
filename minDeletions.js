//From 1647 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function minDeletions(s) {
  let count = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }
  let values = Object.values(count).sort((x, y) => y - x);
  //at worst there's 26 equal values. so we'd subtract sum(1-25)
  let removed = 0;
  for (let i = 0; i < values.length - 1; i++) {
    let first = values[i];
    let second = values[i + 1];
    if (first === 0) {
      removed += second;
      values[i + 1] = 0;
    } else {
      if (first <= second) {
        removed += second - first + 1;
        values[i + 1] = first - 1;
      }
    }
  }
  return removed;
}
