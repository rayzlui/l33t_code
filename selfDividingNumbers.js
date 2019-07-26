//From 728 in LeetCode

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function selfDividingNumbers(left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    const digits = i.toString().split('');
    if (digits.every(x => i % x === 0)) {
      result.push(i);
    }
  }
  return result;
}
