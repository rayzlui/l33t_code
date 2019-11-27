//From 1006 in LeetCode

/**
 * @param {number} N
 * @return {number}
 */

function clumsy(N) {
  let result = 0;
  let current = N;
  let i = 1;
  for (; i < N; i++) {
    let num = N - i;
    if (i % 4 === 1) {
      current = current * num;
    }
    if (i % 4 === 2) {
      current =
        current > 0 ? Math.floor(current / num) : Math.ceil(current / num);
      result += current;
    }
    if (i % 4 === 3) {
      result += num;
      current = -1;
    }
    if (i % 4 === 0) {
      current = current * num;
    }
  }
  if ((i - 1) % 4 === 0 || (i - 1) % 4 === 1) {
    result += current;
  }
  return result;
}
