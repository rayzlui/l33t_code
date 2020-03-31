//From 8 in LeetCode

/**
 * @param {string} str
 * @return {number}
 */
const nums = '1234567890'.split('').reduce((acc, curr) => {
  acc[curr] = true;
  return acc;
}, {});
function myAtoi(str) {
  let cleanStr = str.trim();
  let first = cleanStr[0];
  if (first !== '-' && first !== '+' && first * 0 !== 0) {
    return 0;
  }
  let num = '';
  let i;
  switch (first) {
    case '-':
      i = 1;
      while (nums[cleanStr[i]]) {
        num += cleanStr[i];
        i++;
      }
      return num * -1 < -2147483648 ? -2147483648 : num * -1;
    case '+':
      i = 1;
      while (nums[cleanStr[i]]) {
        num += cleanStr[i];
        i++;
      }
      return num * 1 > 2147483647 ? 2147483647 : num * 1;
    default:
      i = 0;
      while (nums[cleanStr[i]]) {
        num += cleanStr[i];
        i++;
      }
      return num * 1 > 2147483647 ? 2147483647 : num * 1;
  }
}
