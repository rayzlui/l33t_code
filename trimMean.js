//From 1619 in LeetCode

/**
 * @param {number[]} arr
 * @return {number}
 */
function trimMean(arr) {
  arr.sort((x, y) => x - y);
  let size = arr.length;
  let oneTwenth = size / 20;
  arr.splice(arr.length - oneTwenth);
  arr.splice(0, oneTwenth);
  let sum = arr.reduce((acc, curr) => acc + curr);
  return sum / (size - 2 * oneTwenth);
}
