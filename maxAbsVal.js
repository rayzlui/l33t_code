//From 1131 in LeetCode

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

function maxAbsValExpr(arr1, arr2) {
  let max1 = (max2 = max3 = max4 = -Infinity);
  let min1 = (min2 = min3 = min4 = Infinity);
  for (let i = 0; i < arr1.length; i++) {
    let for1 = arr1[i] - arr2[i] - i;
    let for2 = arr1[i] + arr2[i] - i;
    let for3 = arr1[i] - arr2[i] + i;
    let for4 = arr1[i] + arr2[i] + i;
    max1 = Math.max(for1, max1);
    min1 = Math.min(for1, min1);
    max2 = Math.max(for2, max2);
    min2 = Math.min(for2, min2);
    max3 = Math.max(for3, max3);
    min3 = Math.min(for3, min3);
    max4 = Math.max(for4, max4);
    min4 = Math.min(for4, min4);
  }
  return Math.max(max1 - min1, max2 - min2, max3 - min3, max4 - min4);
}
