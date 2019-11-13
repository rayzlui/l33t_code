//From 1207 in LeetCode

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
  let holder = {};
  arr.forEach(x => {
    if (holder[x] === undefined) {
      holder[x] = 1;
    } else {
      holder[x]++;
    }
  });
  let values = Object.values(holder);
  let set = new Set(values);
  return set.size === values.length;
}
