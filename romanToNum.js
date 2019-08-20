//From 13 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  let addThis = 0;
  for (let i = 0; i < s.length; i++) {
    let num = s[i];
    if (num === 'M') {
      addThis += 1000;
    }
    if (num === 'D') {
      addThis += 500;
    }
    if (num === 'C') {
      let num2 = s[i + 1];
      if (num2 === 'D') {
        addThis += 400;
        i++;
      } else if (num2 === 'M') {
        i++;
        addThis += 900;
      } else {
        addThis += 100;
      }
    }
    if (num === 'L') {
      addThis += 50;
    }
    if (num === 'X') {
      let num3 = s[i + 1];
      if (num3 === 'L') {
        addThis += 40;
        i++;
      } else if (num3 === 'C') {
        addThis += 90;
        i++;
      } else {
        addThis += 10;
      }
    }
    if (num === 'V') {
      addThis += 5;
    }
    if (num === 'I') {
      let num4 = s[i + 1];
      if (num4 === 'V') {
        i++;
        addThis += 4;
      } else if (num4 === 'X') {
        i++;
        addThis += 9;
      } else {
        addThis++;
      }
    }
  }
  return addThis;
}
