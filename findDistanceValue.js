//From 1385 in LeetCode

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
function findTheDistanceValue(arr1, arr2, d) {
  return arr1.filter(x => {
    return arr2.map(y => Math.abs(y - x)).filter(z => z <= d).length === 0;
  }).length;
};
