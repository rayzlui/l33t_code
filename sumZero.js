//From 1304 in LeetCode

/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) {
  let half = Math.floor(n / 2);
  let result = [];
  if (n % 2 === 1) {
    result.push(0);
  }
  for (let i = 0; i < half; i++) {
    result.push(n);
    result.push(n * -1);
    n--;
  }

  return result;
}
