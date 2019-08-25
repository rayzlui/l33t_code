//From 409 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  if (s === '') {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  let longest = 0;
  let array = s.split('');
  for (let i = 0; i < array.length; ) {
    let letter = array[i];
    let num = array.filter(x => x === letter).length;
    array = array.filter(x => x !== letter);
    if (array.length === 0 && longest === 0) {
      return num + longest;
    }
    if (num % 2 === 0) {
      longest += num;
    } else {
      if (longest % 2 === 0) {
        longest += num;
      } else {
        longest += num - 1;
      }
    }
  }
  return longest;
}
