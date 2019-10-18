//From 434 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function countSegments(s) {
  return s.split(' ').filter(x => x.trim() !== '').length;
}
