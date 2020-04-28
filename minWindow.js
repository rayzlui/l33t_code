//From 76 in LeetCode

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (s === t) {
    return s;
  }
  let min = s + s;
  let tVals = t.split('').reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let letters = Object.keys(tVals);
  let currentString = {};
  let front = 0;
  let back = 0;
  for (; back <= s.length; ) {
    if (letters.every(x => currentString[x] >= tVals[x])) {
      min =
        min.length > s.substring(front, back).length
          ? s.substring(front, back)
          : min;
      currentString[s[front]]--;
      if (currentString[s[front]] < 1) {
        delete currentString[s[front]];
      }
      front++;
    } else {
      if (currentString[s[back]]) {
        currentString[s[back]]++;
      } else {
        currentString[s[back]] = 1;
      }
      back++;
    }
  }
  return min === s + s ? '' : min;
}
