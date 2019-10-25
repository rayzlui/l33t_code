//From 190 in LeetCode

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  let reversed = n
    .toString(2)
    .split('')
    .reverse()
    .join('');
  let length = 32 - reversed.length;
  for (let i = 0; i < length; i++) {
    reversed = reversed + '0';
  }
  return parseInt(reversed, 2);
};

//faster

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  let string = n.toString(2);
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse + string[i];
  }
  let extra = 32 - string.length;
  for (let j = 0; j < extra; j++) {
    reverse = reverse + '0';
  }
  return parseInt(reverse, 2);
};
