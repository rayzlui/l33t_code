//From 1347 in LeetCode

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function minSteps(s, t) {
  if (s.length !== t.length) {
    return 0;
  }
  let holder = {};
  s.split('').forEach(x => {
    if (holder[x]) {
      holder[x]++;
    } else {
      holder[x] = 1;
    }
  });
  t.split('').forEach(x => {
    if (holder[x]) {
      holder[x]--;
      if (holder[x] === 0) {
        delete holder[x];
      }
    }
  });
  let keys = Object.keys(holder);
  return keys.reduce((acc, curr) => holder[curr] + acc, 0);
}
