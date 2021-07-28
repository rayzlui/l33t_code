//From 1945 in LeetCode

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function getLucky(s, k) {
  let alphabetValues = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .reduce((acc, curr, index) => {
      acc[curr] = (index + 1).toString();
      return acc;
    }, {});
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let value = alphabetValues[s[i]];
    for (let j = 0; j < value.length; j++) {
      sum += value[j] / 1;
    }
  }
  while (k > 1) {
    let sumString = sum.toString();
    sum = 0;
    for (let i = 0; i < sumString.length; i++) {
      sum += sumString[i] / 1;
    }
    k--;
  }
  return sum;
}
