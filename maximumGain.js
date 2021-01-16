//From 1717 in LeetCode

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function maximumGain(s, x, y) {
  let seen = [];
  let [larger, smaller] = x > y ? [x, y] : [y, x];
  let matchLarge;
  let matchSmall;
  if (larger === x) {
    [matchLarge, matchSmall] = ['ab', 'ba'];
  } else {
    [matchLarge, matchSmall] = ['ba', 'ab'];
  }
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (seen[seen.length - 1] + s[i] === matchLarge) {
      result += larger;
      seen.pop();
    } else {
      seen.push(s[i]);
    }
  }
  let again = [];
  for (let i = 0; i < seen.length; i++) {
    if (again[again.length - 1] + seen[i] === matchSmall) {
      result += smaller;
      again.pop();
    } else {
      again.push(seen[i]);
    }
  }
  return result;
}
