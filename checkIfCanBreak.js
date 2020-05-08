//From 1433 in LeetCode

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let alphabetVal = 'abcdefghijklmnopqrstuvwxyz'
  .split('')
  .reduce((acc, curr, index) => {
    acc[curr] = index / 1;
    return acc;
  }, {});
function checkIfCanBreak(s1, s2) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < s1.length; i++) {
    arr1.push(alphabetVal[s1[i]]);
    arr2.push(alphabetVal[s2[i]]);
  }
  arr1.sort((x, y) => x - y);
  arr2.sort((x, y) => x - y);
  let arr1Positive;
  for (let index = 0; index < arr1.length; index++) {
    let curr = arr1[index];
    if (arr1Positive === undefined) {
      if (curr > arr2[index]) {
        arr1Positive = true;
      }
      if (curr < arr2[index]) {
        arr1Positive = false;
      }
    } else {
      if (curr > arr2[index]) {
        if (!arr1Positive) {
          return false;
        }
      }
      if (curr < arr2[index]) {
        if (arr1Positive) {
          return false;
        }
      }
    }
  }
  return true;
}
