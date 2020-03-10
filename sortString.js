//From 1370 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function sortString(s) {
  let holder = s
    .split('')
    .sort()
    .reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
  let string = '';
  let reverse = false;
  while (string.length !== s.length) {
    let keys = Object.keys(holder);
    keys.forEach(x => {
      holder[x]--;
      if (holder[x] === 0) {
        delete holder[x];
      }
    });
    if (reverse) {
      keys.reverse();
    }
    string += keys.join('');
    reverse = !reverse;
  }
  return string;
}
