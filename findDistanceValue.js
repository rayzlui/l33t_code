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

//faster

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
function findTheDistanceValueII(arr1, arr2, d) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let bad = false;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        bad = true;
        break;
      }
    }
    if (!bad) {
      count++;
    }
  }
  return count;
};
