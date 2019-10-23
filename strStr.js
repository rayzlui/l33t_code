//From 28 in LeetCode

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle === '') {
    return 0;
  }
  let length = needle.length;
  for (let i = 0; i < haystack.length - (length - 1); i++) {
    let subString = haystack.substr(i, length);
    if (subString === needle) {
      return i;
    }
  }
  return -1;
};
