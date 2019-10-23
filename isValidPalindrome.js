//From 125 in LeetCode

/**
 * @param {string} s
 * @return {boolean}
 */
const alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789'
  .split('')
  .reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});

function getAlphaNumberic(string) {
  let arr = string.toLowerCase().split('');
  return arr.filter(x => alphaNum[x]);
}

var isPalindrome = function(s) {
  let forward = getAlphaNumberic(s);
  let reverse = forward
    .slice()
    .reverse()
    .join('');
  return reverse === forward.join('');
};
