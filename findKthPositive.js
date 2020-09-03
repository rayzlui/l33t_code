//From 1539 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthPositive(arr, k) {
  let missing = [];
  let curr = 0;
  let start = 0;
  while (missing.length < k) {
    if (curr === arr.length) {
      return arr[arr.length - 1] + (k - missing.length);
    }
    for (let i = start + 1; i < arr[curr]; i++) {
      missing.push(i);
      if (missing.length === k) {
        break;
      }
    }

    start = arr[curr];
    curr++;
  }
  return missing.pop();
}
