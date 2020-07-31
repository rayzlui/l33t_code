//From 1524 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function numOfSubarrays(arr) {
  let store = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < store.length; j++) {
      store[j] += arr[i];
      if (store[j] % 2 === 1) {
        count = (count + 1) % (10 ** 9 + 7);
      }
    }
    store[i] = arr[i];
    if (arr[i] % 2 === 1) {
      count++;
    }
  }
  return count;
}
