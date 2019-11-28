//From 12 in LeetCode

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  let thou = Math.floor(num / 1000);
  let hun = Math.floor((num % 1000) / 100);
  let tens = Math.floor((num % 100) / 10);
  let one = Math.floor(num % 10);
  let result = '';
  if (thou >= 1) {
    for (let i = 0; i < thou; i++) {
      result += 'M';
    }
  }
  if (hun >= 1) {
    if (hun === 4) {
      result += 'CD';
    } else if (hun === 9) {
      result += 'CM';
    } else {
      if (hun > 3) {
        result += 'D';
        hun -= 5;
      }
      for (let i = 0; i < hun; i++) {
        result += 'C';
      }
    }
  }
  if (tens >= 1) {
    if (tens === 4) {
      result += 'XL';
    } else if (tens === 9) {
      result += 'XC';
    } else {
      if (tens > 3) {
        result += 'L';
        tens -= 5;
      }
      for (let i = 0; i < tens; i++) {
        result += 'X';
      }
    }
  }
  if (one >= 1) {
    if (one === 4) {
      result += 'IV';
    } else if (one === 9) {
      result += 'IX';
    } else {
      if (one > 3) {
        result += 'V';
        one -= 5;
      }
      for (let i = 0; i < one; i++) {
        result += 'I';
      }
    }
  }
  return result;
}
