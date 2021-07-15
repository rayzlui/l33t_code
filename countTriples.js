//From 1925 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function countTriples(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let sum = i ** 2 + j ** 2;
      let squareRoot = Math.sqrt(sum);
      if (squareRoot > n) {
        j = n;
      } else {
        if (squareRoot === Math.floor(squareRoot)) {
          count += 2;
        }
      }
    }
  }
  return count;
}
