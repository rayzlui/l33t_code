//From 1750 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function minimumLength(s) {
  let char = s[0];
  let left = 0;
  let right = s.length - 1;
  while (s[left] === s[right] && left < right) {
    while (s[left] === char) {
      left++;
    }
    while (s[right] === char) {
      right--;
    }
    if (left > right) {
      return 0;
    }
    if (left === right) {
      return 1;
    }
    char = s[left];
  }
  return right - left + 1;
}
console.log(minimumLength('cabaabac'));
