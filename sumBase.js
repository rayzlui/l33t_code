//From 1837 in LeetCode

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function sumBase(n, k) {
  let num = n.toString(k);
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i] / 1;
  }
  return result;
}
