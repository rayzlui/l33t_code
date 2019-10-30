//From 1016 in LeetCode

/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
function queryString(S, N) {
  for (let i = 1; i <= N; i++) {
    let binary = i.toString(2);
    if (!S.includes(binary)) {
      return false;
    }
  }
  return true;
}
