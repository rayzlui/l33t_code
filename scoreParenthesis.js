//From 856 in LeetCode

/**
 * @param {string} S
 * @return {number}
 */
function scoreOfParentheses(S) {
  let result = 0;
  let multiplier = 1;
  let sum = 0;
  for (let i = 1; i < S.length; i++) {
    let current = S[i];
    let previous = S[i - 1];
    if (current === '(') {
      if (previous === '(') {
        multiplier = multiplier * 2;
      } else {
        result += multiplier * sum;
        sum = 0;
      }
    } else {
      if (previous === '(') {
        sum++;
      } else {
        sum = sum * 2;
        multiplier = multiplier / 2;
      }
    }
  }
  return result + sum;
}
