//From 1614 in LeetCode

/**
 * @param {string} s
 * @return {number}
 */
function maxDepth(s) {
  let maxDepth = 0;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === '(') {
      depth++;
      maxDepth = Math.max(maxDepth, depth);
    } else if (char === ')') {
      depth--;
    }
  }
  return maxDepth;
}
