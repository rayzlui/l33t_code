//From 1323 in LeetCode

/**
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num) {
  let array = num.toString().split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '6') {
      array[i] = 9;
      return array.join('') / 1;
    }
  }
  return num;
}

//faster
function maximum69NumberII(num) {
  let array = num.toString().split('');
  let firstSix = array.indexOf('6');
  if (firstSix === -1) {
    return num;
  }
  array.splice(firstSix, 1, '9');
  return array.join('') / 1;
}
