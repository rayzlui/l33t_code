//From 9 in LeetCode

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let num = x.toString();
  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] !== num[num.length - i - 1]) {
      return false;
    }
  }
  return true;
};
