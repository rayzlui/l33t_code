//From 509 in LeetCode

/**
 * @param {number} N
 * @return {number}
 */
function fib(N) {
  if (N === 0) return 0;
  let n2 = 0;
  let n1 = 1;
  for (let i = 0; i < N; i++) {
    let newn1 = n1 + n2;
    n2 = n1;
    n1 = newn1;
  }
  return n2;
}
