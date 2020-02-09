//From 1331 in LeetCode

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr) {
  let sorted = arr.slice().sort((x, y) => x - y);
  let counter = 1;
  let ranks = sorted.reduce((acc, curr) => {
    if (acc[curr] === undefined) {
      acc[curr] = counter;
      counter++;
    }
    return acc;
  }, {});
  return arr.map(x => ranks[x]);
}
