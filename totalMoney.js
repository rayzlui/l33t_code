//From 1716 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function totalMoney(n) {
  let result = 0;
  let single = 0;
  for (let i = 0; i < n; i++) {
    if (i % 7 === 0) {
      single++;
    }

    result += single + (i % 7);
  }
  return result;
}
