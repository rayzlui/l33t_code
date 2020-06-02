//From 1460 in LeetCode

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
function canBeEqual(target, arr) {
  let count = target.reduce(
    (acc, curr, index) => {
      if (acc[0][curr]) {
        acc[0][curr]++;
      } else {
        acc[0][curr] = 1;
      }
      if (acc[1][arr[index]]) {
        acc[1][arr[index]]++;
      } else {
        acc[1][arr[index]] = 1;
      }
      return acc;
    },
    [{}, {}],
  );
  let keys = Object.keys(count[0]);
  let keys2 = Object.keys(count[1]);
  return keys.every(
    (x, index) => count[0][x] === count[1][keys2[index]] && x === keys2[index],
  );
}
