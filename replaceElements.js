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

