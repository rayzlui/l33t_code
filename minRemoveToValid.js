//From 1249 in LeetCode

/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
  let parenthesesCount = 0;
  let result = [];
  let openParentheses = [];
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current === '(') {
      parenthesesCount++;
      result.push(current);
      openParentheses.unshift(result.length - 1);
    } else if (current === ')') {
      if (parenthesesCount > 0) {
        result.push(current);
        parenthesesCount--;
      }
    } else {
      result.push(current);
    }
  }
  if (parenthesesCount > 0) {
    for (let i = 0; i < parenthesesCount; i++) {
      let remove = openParentheses[i];
      result.splice(remove, 1);
    }
  }
  return result.join('');
}
