//From 22 in LeetCode

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  let result = [];
  function recursion(input, left, right) {
    let array = input.slice();
    if (input.length === n * 2) {
      result.push(input.join(''));
      return;
    }

    if (left < n) {
      array.push('(');
      recursion(array, left + 1, right);
      array.pop();
    }
    if (right < left) {
      array.push(')');
      recursion(array, left, right + 1);
    }
  }
  recursion([], 0, 0);
  return result;
}
