//From 1566 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
function containsPattern(arr, m, k) {
  let count = {};
  let first = arr.slice(0, m);
  count[first.join('')] = {};
  count[first.join('')][0] = m;
  for (let i = m; i < arr.length; i++) {
    first.shift();
    first.push(arr[i]);
    let string = first.join('');
    if (count[string]) {
      count[string][i] = i + m;
      let keys = Object.keys(count[string]);
      if (keys.length >= k) {
        for (let j = 0; j < keys.length; j++) {
          let current = keys[j];
          let tally = 0;
          while (count[string][current]) {
            tally++;
            current = count[string][current];
          }
          if (tally >= k) {
            return true;
          }
        }
      }
    } else {
      count[string] = {};
      count[string][i] = i + m;
    }
  }
  return false;
}
