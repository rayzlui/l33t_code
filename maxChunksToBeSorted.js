//From 769 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function maxChunksToSorted(arr) {
  let atLeast = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value > atLeast) {
      atLeast = value;
    }
    if (i === atLeast) {
      max++;
      atLeast = arr[i + 1];
    }
  }
  return max;
}
