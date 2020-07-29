//From 1525 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function numSplits(s) {
  let arr = s.split('');
  let front = {};
  front[arr.shift()] = 1;
  let back = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let count = 0;
  for (let i = 1; i <= s.length; i++) {
    if (Object.keys(front).length === Object.keys(back).length) {
      count++;
    }
    let curr = s[i];
    if (front[curr]) {
      front[curr]++;
    } else {
      front[curr] = 1;
    }
    back[curr]--;
    if (back[curr] === 0) {
      delete back[curr];
    }
  }
  return count;
}