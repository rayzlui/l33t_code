//From 1588 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function sumOddLengthSubarrays(arr) {
  let count = 0;
  let sum = 0;
  let presum = [];
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
    sum += arr[i];
    presum.push(sum);
  }
  if (presum.length >= 3) {
    count += presum[2];
  }
  for (let i = 3; i < presum.length; i++) {
    let start = i % 2 === 0 ? 1 : 0;
    if (start) {
      count += presum[i];
    }
    for (let j = start; j < i - 2; j += 2) {
      count += presum[i] - presum[j];
    }
  }
  return count;
}
