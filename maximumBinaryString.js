//From 1702 in LeetCode

/**
 * @param {string} binary
 * @return {string}
 */
function maximumBinaryString(binary) {
  //check from 00 from left, if not, check if 10 in next
  //as long as there's a zero after current 0, we can add 1.
  //break point or 'last zero' is at the 0 where's there's only 1 zero left behind it.
  let result = '';
  let stolenZeros = {};
  let forcedZero = false;
  let left = 0;
  let right = 1;
  while (right <= binary.length) {
    if ((binary[left] === '1' || stolenZeros[left]) && !forcedZero) {
      result += '1';
      left++;
      right = right <= left ? left + 1 : right;
    } else {
      if (binary[right] === '0') {
        result += '1';
        stolenZeros[right] = true;
        forcedZero = true;
        left++;
      }
      right++;
    }
  }
  if (left < binary.length) {
    result += '0';
    for (let i = 0; i < binary.length - left - 1; i++) {
      result += '1';
    }
    return result;
  } else {
    return result;
  }
}
