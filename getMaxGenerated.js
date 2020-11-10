//From 1646 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function getMaximumGenerated(n) {
  let arr = [];
  let max = 0;
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      arr.push(0);
    } else if (i === 1) {
      arr.push(1);
      max = 1;
    } else {
      if (i % 2 === 0) {
        arr.push(arr[i / 2]);
      } else {
        arr.push(arr[Math.floor(i / 2)] + arr[Math.floor(i / 2) + 1]);
        max = Math.max(
          arr[Math.floor(i / 2)] + arr[Math.floor(i / 2) + 1],
          max,
        );
      }
    }
  }
  return max;
}
