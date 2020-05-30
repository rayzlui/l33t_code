//From 415 in LeetCode

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
  let shorter = num1.length > num2.length ? num2 : num1;
  let longer = num1.length > num2.length ? num1 : num2;
  let front = longer.substring(0, longer.length - shorter.length);
  let back = longer.substring(longer.length - shorter.length);
  let string = '';
  let carry = 0;
  for (let i = shorter.length - 1; i >= 0; i--) {
    let short = shorter[i];
    let long = back[i];
    let sum = short / 1 + long / 1 + carry;
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    string = sum + string;
  }
  for (let i = front.length - 1; i >= 0; i--) {
    let num = front[i] / 1 + carry;
    if (num > 9) {
      carry = 1;
      num = num % 10;
    } else {
      carry = 0;
    }
    string = num + string;
  }
  return carry ? carry + string : string;
}
