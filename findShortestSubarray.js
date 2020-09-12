//From 1574 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function findLengthOfShortestSubarray(arr) {
  let i = 0;
  let j = arr.length - 1;
  for (; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      break;
    }
  }
  if (i === arr.length - 1) {
    return 0;
  }
  for (; j > 0; j--) {
    if (arr[j] < arr[j - 1]) {
      break;
    }
  }
  let result = Math.min(j, arr.length - i - 1);
  let left = 0;
  let right = j;
  while (i >= left && right < arr.length) {
    if (arr[left] <= arr[right]) {
      result = Math.min(result, right - left - 1);
      left++;
    } else {
      right++;
    }
  }
  return result;
}
