//From 1122 in LeetCode

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    const elements = arr1.filter(x => x == arr2[i]);
    arr1 = arr1.filter(x => x !== arr2[i]);
    result = result.concat(elements);
  }
  arr1.sort((x, y) => x - y);
  return result.concat(arr1);
}
