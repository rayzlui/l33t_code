//From 66 in LeetCode

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + 1;
    if (digits[i] > 9) {
      digits[i] = digits[i] % 10;
    } else {
      break;
    }
    if (i === 0) {
      digits.unshift(1);
    }
  }
  return digits;
}
