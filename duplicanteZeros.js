//From 1089 in LeetCode

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, '0');
      arr.pop();
      i++;
    }
  }
}
