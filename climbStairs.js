//From 70 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let fib1 = 0;
  let fib2 = 1;
  let holder = fib1;
  for (let i = 0; i < n; i++) {
    holder = fib2;
    fib2 = fib1 + fib2;
    fib1 = holder;
  }
  return fib2;
}
