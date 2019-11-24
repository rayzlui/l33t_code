/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
function minimumSwap(s1, s2) {
  if (s1 === s2) {
    return 0;
  }
  if (s1.length !== s2.length) {
    return -1;
  }
  let result = 0;
  let noMatch1 = [];
  let noMatch2 = [];
  let streak1 = [];
  let streak2 = [];
  for (let i = 0; i < s1.length; i++) {
    let letter1 = s1[i];
    let letter2 = s2[i];
    if (letter1 !== letter2) {
      if (streak1[0] === letter1) {
        streak1.push(letter1);
        streak2.push(letter2);
      } else {
        if (streak1.length % 2 === 1) {
          result += (streak1.length - 1) / 2;
          if (noMatch1[noMatch1.length - 1] === streak1[0]) {
            result++;
            noMatch1.pop();
            noMatch2.pop();
          } else {
            noMatch1.push(streak1[0]);
            noMatch2.push(streak2[0]);
          }
        } else {
          result += streak1.length / 2;
        }
        streak1 = [letter1];
        streak2 = [letter2];
      }
    }
  }

  if (streak1.length % 2 === 1) {
    if (streak1[0] === noMatch1[noMatch1.length - 1]) {
      result += Math.ceil(streak1.length / 2);
      noMatch1.pop();
      noMatch2.pop();
    } else {
      result += (streak1.length - 1) / 2;
      noMatch1.push(streak1[0]);
      noMatch2.push(streak2[0]);
    }
  } else {
    result += streak1.length / 2;
  }

  if (noMatch1.length % 2 === 1) {
    return -1;
  }

  let remainder = noMatch1.length / 2;
  return remainder % 2 === 1 ? result + remainder + 1 : result + remainder;
}
