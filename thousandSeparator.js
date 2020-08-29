//From 1556 in LeetCode

/**
 * @param {number} n
 * @return {string}
 */
function thousandSeparator(n) {
  let string = `${n}`;
  let length = string.length;
  if (length < 4) {
    return string;
  }
  let decimals = length / 3 - 1;
  let front = length % 3;
  let result = front ? string.substring(0, front) + '.' : '';
  while (front < length) {
    result += string.substring(front, front + 3) + '.';
    front = front + 3;
  }
  return result.substring(0, result.length - 1);
}
