//From 1442 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function countTriplets(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let xor = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      xor = xor ^ arr[j];
      if (xor === 0) {
        count += j - i;
      }
    }
  }
  return count;
}
