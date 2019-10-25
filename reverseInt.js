//From 7 in LeetCode

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  let multiplier = x < 0 ? -1 : 1;
  let string =
    x < 0
      ? x
          .toString()
          .split('')
          .splice(1)
          .reverse()
          .join('')
      : x
          .toString()
          .split('')
          .reverse()
          .join('');
  return (string / 1).toString(2).length >= 32 ? 0 : string / multiplier;
}

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  let multiplier = x < 0 ? -1 : 1;
  x = x < 0 ? x * -1 : x;
  let string = x.toString();
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return (reverse / 1).toString(2).length >= 32 ? 0 : reverse / multiplier;
};
