//From 1497 in LeetCode

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
function canArrange(arr, k) {
  let sum = arr.reduce((acc, curr) => acc + curr);
  return sum % k === 0 && sum !== k;
}