//From 1641 in LeetCode

/**
 * @param {number} n
 * @return {number}
 */
function countVowelStrings(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 5;
  }
  if (n === 2) {
    return 15;
  }
  let result = 15;
  let i = 2;
  let sub1 = 5;
  let sub2 = 4;
  let sub3 = 3;
  let sub4 = 2;
  while (i < n) {
    let new1 = result;
    let new2 = new1 - sub1;
    let new3 = new2 - sub2;
    let new4 = new3 - sub3;
    let new5 = new4 - sub4;
    let newResult = result + new5 + new2 + new3 + new4;
    result = newResult;
    sub1 = new1;
    sub2 = new2;
    sub3 = new3;
    sub4 = new4;
    i++;
  }
  return result;
}
