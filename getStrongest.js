//From 1471 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

function getStrongest(arr, k) {
  arr.sort((x, y) => x - y);
  let median =
    arr.length % 2 === 0
      ? arr[Math.floor(arr.length) / 2 - 1]
      : arr[Math.floor(arr.length / 2)];
  let diffs = arr.reduce((acc, curr, index) => {
    acc[index] = Math.abs(curr - median);
    return acc;
  }, {});
  let keys = Object.keys(diffs);
  keys.sort((x, y) => {
    if (diffs[y] === diffs[x]) {
      return arr[y] - arr[x];
    } else {
      return diffs[y] - diffs[x];
    }
  });
  return keys.slice(0, k).map(x => arr[x]);
}

//faster
function getStrongestII(arr, k) {
  arr.sort((x, y) => x - y);
  let median =
    arr.length % 2 === 0
      ? arr[Math.floor(arr.length) / 2 - 1]
      : arr[Math.floor(arr.length / 2)];

  return arr
    .sort((x, y) => {
      let xMag = Math.abs(x - median);
      let yMag = Math.abs(y - median);
      if (xMag === yMag) {
        return y - x;
      }
      return yMag - xMag;
    })
    .slice(0, k);
}
