//From 1287 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function findSpecialInteger(arr) {
  let length = arr.length;
  let count = {};
  for (let i = 0; i < length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
    if (count[arr[i]] > length / 4) {
      return arr[i];
    }
  }
}
