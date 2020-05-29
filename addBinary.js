//From 67 in LeetCode

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let newString = '';
  let carry = 0;
  let shorter = a.length > b.length ? b : a;
  let longer = a.length > b.length ? a : b;
  let front = longer.substring(0, longer.length - shorter.length);
  let back = longer.substring(longer.length - shorter.length);
  for (let i = shorter.length - 1; i >= 0; i--) {
    let currA = shorter[i] ? shorter[i] / 1 : 0;
    let currB = back[i] ? back[i] / 1 : 0;
    if (currA + currB + carry === 3) {
      newString = '1' + newString;
      carry = 1;
    } else if (currA + currB + carry === 2) {
      newString = '0' + newString;
      carry = 1;
    } else if (currA + currB + carry === 1) {
      newString = '1' + newString;
      carry = 0;
    } else {
      newString = '0' + newString;
      carry = 0;
    }
  }
  for (let i = front.length - 1; i >= 0; i--) {
    let curr = front[i] / 1;
    if (curr + carry === 2) {
      newString = '0' + newString;
      carry = 1;
    } else if (curr + carry === 1) {
      newString = '1' + newString;
      carry = 0;
    } else {
      newString = '0' + newString;
      carry = 0;
    }
  }
  return carry ? carry + newString : newString;
}
