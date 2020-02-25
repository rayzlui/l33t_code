//From 1356 in LeetCode

/**
 * @param {number[]} arr
 * @return {number[]}
 */

function bitify(x) {
  return x
    .toString(2)
    .split('')
    .filter(x => x === '1').length;
}
function sortByBits(arr) {
  return arr.sort((x, y) => {
    let xCount = bitify(x);
    let yCount = bitify(y);
    if (xCount === yCount) {
      return x - y;
    } else {
      return xCount - yCount;
    }
  });
}

//faster

/**
 * @param {number[]} arr
 * @return {number[]}
 */

function sortByBitsII(arr) {
  let noDups = arr.reduce((acc, curr) => {
    acc[curr] = bitify(curr);
    return acc;
  }, {});
  return arr.sort((x, y) => {
    if (noDups[x] === noDups[y]) {
      return x - y;
    } else {
      return noDups[x] - noDups[y];
    }
  });
}
