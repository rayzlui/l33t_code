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

//faster

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function minStepsII(s, t) {
  let holder = {};
  for (let i = 0; i < s.length; i++) {
    let x = s[i];
    let y = t[i];
    if (holder[x]) {
      holder[x]++;
      if (holder[x] === 0) {
        delete holder[x];
      }
    } else {
      holder[x] = 1;
    }
    if (holder[y]) {
      holder[y]--;
      if (holder[y] === 0) {
        delete holder[y];
      }
    } else {
      holder[y] = -1;
    }
  }
  return Object.values(holder).reduce((acc, curr) => {
    if (curr > 0) {
      acc = acc + curr;
    }
    return acc;
  }, 0);
}
