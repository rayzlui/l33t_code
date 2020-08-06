//From 1535 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function getWinner(arr, k) {
  let max = Math.max(...arr);
  if (k >= arr.length) {
    return max;
  }
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let index = arr.findIndex(x => x > curr);
    if (index === -1) {
      return curr;
    }
    if (i === 0) {
      if (index - i > k) {
        return curr;
      } else {
        i = index - 1;
      }
    } else {
      if (index - i >= k) {
        return curr;
      } else {
        i = index - 1;
      }
    }
  }
  return max;
}
