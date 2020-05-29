//From 1441 in LeetCode

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
function buildArray(target, n) {
  let result = [];
  let ops = [];
  for (let i = 0, j = 0; i < n; i++) {
    result.push(i + 1);
    ops.push('Push');
    if (result[result.length - 1] !== target[j]) {
      result.pop();
      ops.push('Pop');
    } else {
      j++;
    }
    if (result.length === target.length) {
      return ops;
    }
  }
  return ops;
}
