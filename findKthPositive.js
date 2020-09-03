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

//less memory

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthPositiveII(arr, k) {
  let missing = 0;
  let lost = null;
  let curr = 0;
  let start = 0;
  while (missing < k) {
    if (curr === arr.length) {
      return arr[arr.length - 1] + (k - missing);
    }
    for (let i = start + 1; i < arr[curr]; i++) {
      lost = i;
      missing++;
      if (missing === k) {
        break;
      }
    }

    start = arr[curr];
    curr++;
  }
  return lost;
}
