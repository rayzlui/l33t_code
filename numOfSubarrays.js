//From 1343 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
function numOfSubarrays(arr, k, threshold) {
  let count = 0;
  let sum = arr.slice(0, k).reduce((acc, curr) => acc + curr, 0);
  for (let i = k; i <= arr.length; i++) {
    if (sum / k >= threshold) {
      count++;
    }
    sum -= arr[i - k];
    sum += arr[i];
  }
  return count;
}
