//From 1317 from LeetCode

/**
 * @param {number} n
 * @return {number[]}
 */
function getNoZeroIntegers(n) {
  let result = [1, n - 1];
  while (
    result[0].toString().includes('0') ||
    result[1].toString().includes('0')
  ) {
    result[0]++;
    result[1]--;
  }
  return result;
}
