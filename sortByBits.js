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

