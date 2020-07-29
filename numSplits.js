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

//faster

/**
 * @param {string} s
 * @return {number}
 */
function numSplitsII(s) {
  let arr = s.split('');
  let front = new Set();
  front.add(arr.shift());
  let back = new Set();
  let counter = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    back.add(curr);
    return acc;
  }, {});
  let count = 0;
  for (let i = 1; i <= s.length; i++) {
    if (front.size === back.size) {
      count++;
    }
    let curr = s[i];
    front.add(curr);
    counter[curr]--;
    if (counter[curr] === 0) {
      back.delete(curr);
    }
  }
  return count;
}
