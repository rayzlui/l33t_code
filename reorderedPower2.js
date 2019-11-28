//From 869 in LeetCode

/**
 * @param {number} N
 * @return {boolean}
 */
let powersTwo = [];
for (let i = 0; i < 34; i++) {
  let val = 2 ** i;
  powersTwo.push(val.toString().split(''));
}
function reorderedPowerOf2(N) {
  let string = N.toString();
  let sameDigits = powersTwo.filter(x => x.length === string.length);

  return sameDigits.some(x => {
    let copy = x.slice();
    for (let i = 0; i < string.length; i++) {
      let num = string[i];
      let index = copy.indexOf(num);
      if (index === -1) {
        return false;
      } else {
        copy.splice(index, 1);
      }
    }
    return true;
  });
}
