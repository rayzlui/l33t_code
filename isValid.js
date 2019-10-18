//From 20 in LeetCode

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  let para = 0;
  let brackets = 0;
  let obj = 0;
  let last = [];
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let len = last.length - 1;
    switch (current) {
      case '(':
        para++;
        last.push('para');
        break;
      case ')':
        para--;
        if (last[len] !== 'para') {
          return false;
        }
        last.pop();
        break;
      case '[':
        brackets++;
        last.push('brackets');
        break;
      case ']':
        brackets--;
        if (last[len] !== 'brackets') {
          return false;
        }
        last.pop();
        break;
      case '{':
        obj++;
        last.push('object');
        break;
      default:
        obj--;
        if (last[len] !== 'object') {
          return false;
        }
        last.pop();
        break;
    }
    if (para < 0 || brackets < 0 || obj < 0) {
      return false;
    }
  }
  if (para !== 0 || brackets !== 0 || obj !== 0) {
    return false;
  }
  return true;
}
