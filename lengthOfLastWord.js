//From 58 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
}
