//From 1190 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function reverseParentheses(s) {
  let array = s.split('');
  let recent = [];
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (current === '(') {
      recent.push(i);
    }
    if (current === ')') {
      let last = recent[recent.length - 1];
      let reverse = array.splice(last + 1, i - last - 1);
      array.splice(last, 2);
      i -= 2;
      reverse = reverse.reverse();
      array.splice(last, 0, ...reverse);
      recent.pop();
    }
  }
  return array.join('');
}
