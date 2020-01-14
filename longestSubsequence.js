//From 1218 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
function longestSubsequence(arr, difference) {
  let holder = {};
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let isSub = current - difference;

    if (holder[isSub] !== undefined) {
      holder[current] = holder[isSub] + 1;
      result = Math.max(result, holder[current]);
    } else {
      holder[current] = 1;
    }
  }
  return result;
}
