//From 1299 in LeetCode

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  return arr.map((x, index) => {
    if (index === arr.length - 1) {
      return -1;
    }
    let rightSide = arr.slice(index + 1);
    return Math.max(...rightSide);
  });
};

//faster

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElementsII(arr) {
  let holder = 0;
  return arr.map((x, index) => {
    if (index === arr.length - 1) {
      return -1;
    }
    if (holder > index) {
      return arr[holder];
    }
    let rightSide = arr.slice(index + 1);
    let max = Math.max(...rightSide);
    holder = arr.indexOf(max);
    return max;
  });
};
