//From 258 in LeetCode

/**
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
  let numbers = num.toString().split('');
  while (numbers.length > 1) {
    let sum = numbers.reduce((x, y) => x / 1 + y / 1);

    numbers = sum.toString().split('');
  }
  return numbers;
};
