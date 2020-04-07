//From 32 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let result = 0;
  let open = 0;
  let close = 0;
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current === '(') {
      open++;
    } else {
      close++;
    }
    if (open === close) {
      result = Math.max(result, close * 2);
    } else if (close >= open) {
      open = 0;
      close = 0;
    }
  }
  close = 0;
  open = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let current = s[i];
    if (current === '(') {
      open++;
    } else {
      close++;
    }
    if (open === close) {
      result = Math.max(result, open * 2);
    } else if (open >= close) {
      open = 0;
      close = 0;
    }
  }
  return result;
}
