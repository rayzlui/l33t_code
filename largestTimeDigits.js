//From 949 in LeetCode

/**
 * @param {number[]} A
 * @return {string}
 */
function largestTimeFromDigits(A) {
  if (A.every(x => x > 2)) {
    return '';
  }
  if (A.filter(x => x > 5).length === 3) {
    return '';
  }
  A = A.sort((x, y) => y - x);
  if (A.every(x => x <= 2)) {
    return `${A[0]}` + `${A[1]}:` + `${A[2]}` + `${A[3]}`;
  }
  let indexTwo = A.indexOf(2);
  if (indexTwo !== -1) {
    let time = [2];
    let check = A.slice();
    check.splice(indexTwo, 1);
    let indexLowerThree = check.find(x => x < 4);
    if (indexLowerThree !== undefined) {
      time.push(indexLowerThree);
      time = time.join('');
      time = [time];
      let index = check.indexOf(indexLowerThree);
      check.splice(index, 1);
      let lessThanFive = check.find(x => x < 6);
      let back = [];
      if (lessThanFive !== undefined) {
        back.push(lessThanFive);
        let index = check.indexOf(lessThanFive);
        check.splice(index, 1);
        back.push(check[0]);
        back = back.join('');
        time.push(back);
        return time.join(':');
      }
    }
  }
  let indexOne = A.indexOf(1);
  if (indexOne !== -1) {
    let time = [1];
    let check = A.slice();
    check.splice(indexOne, 1);
    let containsFive = check.find(x => x < 6);
    let back = [];
    if (containsFive !== undefined) {
      let max = Math.max(...check);
      //if max === containsFive, that means all digits were less than 6 so it would be best to have max earlier in the string.
      time.push(max);
      time = [time.join('')];
      let indexMax = check.indexOf(max);
      check.splice(indexMax, 1);
      check = check[0] > 5 ? check.reverse().join('') : check.join('');

      time.push(check);
      return time.join(':');
    }
  }
  let indexZero = A.indexOf(0);
  if (indexZero !== -1) {
    let check = A.slice();
    check.splice(indexZero, 1);
    let time = [0];
    let belowSix = check.find(x => x < 6);
    if (belowSix !== undefined) {
      time.push(check[0]);
      time = [time.join('')];
      check.shift();
      if (check[0] >= 6) {
        check.reverse();
      }
      check = check.join('');
      time.push(check);
      return time.join(':');
    }
  }
  return '';
}
