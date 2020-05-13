//From 1432 in LeetCode

/**
 * @param {number} num
 * @return {number}
 */
function maxDiff(num) {
  let string = num.toString();
  let max = string.split('');
  let min = string.split('');
  let needMax = true;
  let needMin = true;
  if (min[0] !== '1') {
    min = min.map(x => {
      if (x === min[0]) {
        x = '1';
      }
      return x;
    });
    needMin = false;
  }
  let cantZero = min[0];
  for (let i = 0; i < string.length; i++) {
    if (needMax) {
      if (string[i] !== '9') {
        max = max.map(x => {
          if (x === string[i]) {
            x = 9;
          }
          return x;
        });

        needMax = false;
      }
    }
    if (needMin) {
      if (string[i] !== '0' && string[i] !== cantZero) {
        min = min.map(x => {
          if (x === string[i]) {
            x = 0;
          }
          return x;
        });
        needMin = false;
      }
    }
    if (needMax === false && needMin === false) {
      return max.join('') / 1 - min.join('') / 1;
    }
  }
  return max.join('') / 1 - min.join('') / 1;
}
