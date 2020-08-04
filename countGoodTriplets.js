//From 1534 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function countGoodTriplets(arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let first = arr[i];
    for (let j = i + 1; j < arr.length - 1; j++) {
      let second = arr[j];
      if (Math.abs(first - second) <= a) {
        for (let k = j + 1; k < arr.length; k++) {
          let third = arr[k];
          if (Math.abs(first - third) <= c && Math.abs(second - third) <= b) {
            count++;
          }
        }
      }
    }
  }
  return count;
}
