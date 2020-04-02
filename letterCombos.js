//From 17 in LeetCode

/**
 * @param {string} digits
 * @return {string[]}
 */
const letters = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};
function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }
  let combos = [];
  function recursion(current, string) {
    if (current === digits.length) {
      combos.push(string);
      return;
    }
    for (let i = 0; i < letters[digits[current]].length; i++) {
      recursion(current + 1, string + letters[digits[current]][i]);
    }
  }
  recursion(0, '');
  return combos;
}
