//From 38 in LeetCode

/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function(n) {
  let i = 1;
  let num = [1];
  while (i < n) {
    let newNum = [];
    let counter = 1;
    for (let j = 0; j < num.length; j++) {
      if (num[j] === num[j + 1]) {
        counter++;
      } else {
        newNum.push(counter, num[j]);
        counter = 1;
      }
    }
    num = newNum;
    i++;
  }
  return num.join('');
};
