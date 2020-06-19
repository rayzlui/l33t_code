//From 1481 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findLeastNumOfUniqueInts(arr, k) {
  let holder = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let values = Object.values(holder);
  values.sort((x, y) => x - y);
  while (k > 0) {
    let current = values.shift();
    k -= current;
  }
  return k === 0 ? values.length : values.length + 1;
}
